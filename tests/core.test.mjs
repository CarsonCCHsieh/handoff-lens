import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createLens, createJiraAdapter, parseKeys, parseSnapshot, createSnapshot, checksum,
  signals, LensError, MAX_SNAPSHOT_BYTES, contextFingerprint } from '../src/core.mjs';
import { createSyntheticAdapter } from './fixtures/synthetic-adapter.mjs';
import { messages } from '../src/i18n.mjs';

const instant = new Date('2026-10-30T08:00:00.000Z');
const now = () => new Date(instant);
const issue = (key = 'DEMO-1', overrides = {}) => ({ key, statusCategory: 'done',
  updated: '2026-10-30T07:00:00.000Z', dueDate: null, ...overrides });
const adapter = fn => ({ kind: 'synthetic', readIssue: fn });
const fixtureLens = (scenario = 'baseline') => createLens({ adapter: createSyntheticAdapter({ scenario, now }), now });
async function reference(overrides = {}) {
  const snapshot = await createSnapshot(await fixtureLens().inspect({ keys: ['DEMO-1', 'DEMO-2'] }));
  Object.assign(snapshot, overrides); snapshot.digest = await checksum(snapshot); return snapshot;
}
const code = expected => error => error instanceof LensError && error.code === expected;

test('1–5 distinct bounded keys; rejects URL, query, whitespace tricks and six issues before reads', async () => {
  assert.deepEqual(parseKeys('demo-1, DEMO-2'), ['DEMO-1', 'DEMO-2']);
  for (const value of ['', 'DEMO-1,DEMO-1', 'https://evil.test', 'DEMO-1?x=1', 'DEMO-01',
    'DEMO-1 DEMO-2 DEMO-3 DEMO-4 DEMO-5 DEMO-6']) assert.throws(() => parseKeys(value), code('invalid_keys'));
  let reads = 0;
  const lens = createLens({ adapter: adapter(async key => { reads++; return issue(key); }), now });
  await assert.rejects(lens.inspect({ keys: ['DEMO-1', 'DEMO-2', 'DEMO-3', 'DEMO-4', 'DEMO-5', 'DEMO-6'] }), code('invalid_keys'));
  assert.equal(reads, 0);
});

test('exactly five reads, no dependency traversal or automatic retries', async () => {
  const reads = [];
  const lens = createLens({ adapter: adapter(async key => { reads.push(key); return issue(key); }), now });
  const report = await lens.inspect({ keys: ['DEMO-1', 'DEMO-2', 'DEMO-3', 'DEMO-4', 'DEMO-5'] });
  assert.equal(report.rows.length, 5); assert.equal(reads.length, 5); assert.equal(report.exportable, true);
});

test('Jira adapter constructs only fixed GET, drops unrequested personal/text fields', async () => {
  const requests = [];
  const jira = createJiraAdapter(async (uri, options) => {
    requests.push({ uri, options }); return { status: 200, json: async () => ({ key: 'DEMO-1',
      fields: { status: { name: 'Private status text', statusCategory: { key: 'done' } },
        updated: '2026-10-30T07:00:00.000+0000', duedate: null,
        summary: 'PRIVATE_TEXT_SENTINEL', assignee: { displayName: 'PRIVATE_PERSON_SENTINEL' } } }) };
  });
  const value = await jira.readIssue('DEMO-1');
  assert.deepEqual(value, issue());
  assert.equal(requests[0].uri, '/rest/api/3/issue/DEMO-1?fields=status,updated,duedate');
  assert.equal(requests[0].options.method, 'GET');
  assert.equal(JSON.stringify(value).includes('PRIVATE_'), false);
  await assert.rejects(jira.readIssue('DEMO-1/../../myself'), code('invalid_keys'));
  assert.equal(requests.length, 1);
});

test('Jira errors are classified without reading body or retrying', async () => {
  for (const [status, expected] of [[403, 'forbidden'], [404, 'not_found'], [429, 'rate_limited'], [500, 'unavailable']]) {
    let reads = 0; let bodies = 0;
    const jira = createJiraAdapter(async () => { reads++; return { status, json: async () => { bodies++; return 'PRIVATE_BODY'; } }; });
    await assert.rejects(jira.readIssue('DEMO-1'), code(expected)); assert.equal(reads, 1); assert.equal(bodies, 0);
  }
});

test('wrong issue, missing fields, malformed dates and unknown workflow category fail closed', async () => {
  for (const fields of [
    { status: { statusCategory: { key: 'done' } }, updated: 'invalid', duedate: null },
    { status: { statusCategory: { key: 'surprise' } }, updated: instant.toISOString(), duedate: null },
    { status: { statusCategory: { key: 'done' } }, updated: instant.toISOString() },
    { status: { statusCategory: { key: 'done' } }, updated: instant.toISOString(), duedate: '2026-02-30' }
  ]) {
    const jira = createJiraAdapter(async () => ({ status: 200, json: async () => ({ key: 'DEMO-1', fields }) }));
    await assert.rejects(jira.readIssue('DEMO-1'), code('invalid_response'));
  }
  const wrong = createLens({ adapter: adapter(async () => issue('DEMO-2')), now });
  assert.equal((await wrong.inspect({ keys: ['DEMO-1'] })).rows[0].state, 'unavailable');
});

test('snapshot roundtrip retains synthetic label; checksum detects changed content, not authorship', async () => {
  const ref = await reference();
  assert.equal(ref.sourceMode, 'synthetic');
  assert.deepEqual(await parseSnapshot(JSON.stringify(ref)), ref);
  ref.issues[0].statusCategory = 'new';
  await assert.rejects(parseSnapshot(JSON.stringify(ref)), code('checksum_mismatch'));
  // Anyone can recompute a checksum: acceptance is deliberately not identity verification.
  ref.digest = await checksum(ref);
  assert.equal((await parseSnapshot(JSON.stringify(ref))).issues[0].statusCategory, 'new');
});

test('snapshot rejects byte overflow, extra fields, duplicates, oversized scope, and unsupported schema', async () => {
  await assert.rejects(parseSnapshot('x'.repeat(MAX_SNAPSHOT_BYTES + 1)), code('snapshot_too_large'));
  await assert.rejects(parseSnapshot('界'.repeat(22000)), code('snapshot_too_large'));
  const clean = await reference();
  const bad = [ { ...clean, author: 'NOT_ALLOWED' }, { ...clean, schemaVersion: 2 },
    { ...clean, issues: [...clean.issues, clean.issues[0]] },
    { ...clean, issues: Array.from({ length: 6 }, (_, i) => issue(`DEMO-${i + 1}`)) },
    { ...clean, issues: [{ ...clean.issues[0], summary: '<script>NO</script>' }] },
    { ...clean, capturedAt: '2026-10-30' } ];
  for (const value of bad) await assert.rejects(parseSnapshot(JSON.stringify(value)), code('invalid_snapshot'));
});

test('denied/not-found/failed reads never expose corresponding imported values or key', async () => {
  const ref = await reference();
  ref.issues[1] = issue('DEMO-2', { updated: '2001-02-03T04:05:06.000Z', dueDate: '2001-02-04' });
  ref.digest = await checksum(ref);
  const report = await fixtureLens('permission').inspect({ keys: ['DEMO-1', 'DEMO-2'], snapshot: ref });
  assert.equal(report.rows[0].state, 'read');
  assert.deepEqual(report.rows[1], { slot: 2, state: 'unavailable', reason: 'forbidden' });
  const failed = JSON.stringify(report.rows[1]);
  for (const hidden of ['DEMO-2', '2001-02-03', '2001-02-04', 'previous']) assert.equal(failed.includes(hidden), false);
  assert.equal(report.exportable, false);
  await assert.rejects(createSnapshot(report), code('incomplete_snapshot'));
  const allDenied = createLens({ adapter: adapter(async () => { throw new LensError('forbidden'); }), now });
  const denied = await allDenied.inspect({ keys: ['DEMO-1', 'DEMO-2'], snapshot: ref });
  assert.equal(denied.snapshot, null); assert.equal(JSON.stringify(denied).includes('2001-02-'), false);
});

test('schema is revalidated before network even if caller bypasses importer', async () => {
  let reads = 0;
  const lens = createLens({ adapter: adapter(async () => { reads++; return issue(); }), now });
  await assert.rejects(lens.inspect({ keys: ['DEMO-1'], snapshot: { issues: [] } }), code('invalid_snapshot'));
  assert.equal(reads, 0);
});

test('source mode and tenant mismatch reject before reads; missing tenant disables export', async () => {
  const ref = await reference();
  const tenantA = await contextFingerprint('synthetic-tenant-a');
  const tenantB = await contextFingerprint('synthetic-tenant-b');
  assert.notEqual(tenantA, tenantB);
  let reads = 0;
  const jira = { kind: 'jira', sourceContext: tenantA, readIssue: async key => { reads++; return issue(key); } };
  const lens = createLens({ adapter: jira, now });
  await assert.rejects(lens.inspect({ keys: ['DEMO-1'], snapshot: ref }), code('source_mismatch'));
  ref.sourceMode = 'jira'; ref.sourceContext = tenantB; ref.digest = await checksum(ref);
  await assert.rejects(lens.inspect({ keys: ['DEMO-1'], snapshot: ref }), code('source_mismatch'));
  assert.equal(reads, 0);
  ref.sourceContext = tenantA; ref.digest = await checksum(ref);
  assert.equal((await lens.inspect({ keys: ['DEMO-1'], snapshot: ref })).rows[0].state, 'read');
  const unbound = createLens({ adapter: { ...jira, sourceContext: null }, now });
  const result = await unbound.inspect({ keys: ['DEMO-1'] });
  assert.equal(result.exportable, false);
  await assert.rejects(unbound.inspect({ keys: ['DEMO-1'], snapshot: ref }), code('source_mismatch'));
});

test('diff separates field drift, changed rules, elapsed-time ageing and hidden scope removals', async () => {
  const ref = await reference({ capturedAt: '2026-10-30T08:00:00.000Z', ruleVersion: 'lens-signals/99' });
  const later = () => new Date('2026-11-02T08:00:00.000Z');
  const lens = createLens({ adapter: adapter(async key => ref.issues.find(row => row.key === key)), now: later });
  const result = await lens.inspect({ keys: ['DEMO-1'], snapshot: ref });
  assert.equal(result.rows[0].comparison.state, 'same');
  assert.equal(result.rows[0].comparison.ageChanged, true);
  assert.equal(result.rows[0].comparison.ruleChanged, true);
  assert.equal(result.snapshot.scopeChanged, true);
  assert.equal(JSON.stringify(result).includes('DEMO-2'), false);
  const drift = await fixtureLens('drift').inspect({ keys: ['DEMO-1', 'DEMO-2'], snapshot: await reference() });
  assert.deepEqual(drift.rows[1].comparison.fields, ['statusCategory', 'updated']);
  assert.equal(drift.rows[1].signals.outcome, 'attention');
});

test('48-hour, future-clock and UTC due-date boundaries are explicit', () => {
  assert.equal(signals(issue('DEMO-1', { updated: '2026-10-28T08:00:00.000Z' }), instant).freshness, 'fresh');
  assert.equal(signals(issue('DEMO-1', { updated: '2026-10-28T07:59:59.999Z' }), instant).freshness, 'stale');
  assert.equal(signals(issue('DEMO-1', { updated: '2026-10-30T08:05:00.001Z' }), instant).outcome, 'unknown');
  assert.equal(signals(issue('DEMO-1', { statusCategory: 'new', dueDate: '2026-10-29' }), instant).due, 'overdue');
  assert.equal(signals(issue('DEMO-1', { statusCategory: 'new', dueDate: '2026-10-30' }), instant).due, 'not_overdue');
});

test('overlapping read actions are rejected; late timed-out calls cannot change report or start another read', async () => {
  let release; let reads = 0;
  const lens = createLens({ adapter: adapter(() => { reads++; return new Promise(resolve => { release = resolve; }); }), now, timeoutMs: 10 });
  const first = lens.inspect({ keys: ['DEMO-1'] });
  await assert.rejects(lens.inspect({ keys: ['DEMO-1'] }), code('busy'));
  const result = await first;
  assert.deepEqual(result.rows[0], { slot: 1, state: 'unavailable', reason: 'timeout' });
  await assert.rejects(lens.inspect({ keys: ['DEMO-1'] }), code('busy'));
  assert.equal(reads, 1);
  release(issue()); await new Promise(resolve => setImmediate(resolve));
  assert.equal(result.rows[0].state, 'unavailable');
});

test('opaque exception contents are never included in report', async () => {
  const lens = createLens({ adapter: adapter(async () => { throw new Error('PRIVATE_ERROR_SENTINEL'); }), now });
  assert.equal(JSON.stringify(await lens.inspect({ keys: ['DEMO-1'] })).includes('PRIVATE_ERROR_SENTINEL'), false);
});

test('three language dictionaries have matching keys, real text, and safe static UI output', async () => {
  for (const dictionary of Object.values(messages)) {
    assert.deepEqual(Object.keys(dictionary).sort(), Object.keys(messages.en).sort());
    assert.equal(Object.values(dictionary).every(value => typeof value === 'string' && value.trim()), true);
  }
  const app = await readFile(new URL('../src/app.mjs', import.meta.url), 'utf8');
  assert.doesNotMatch(app, /innerHTML|outerHTML|insertAdjacentHTML|eval\s*\(|localStorage|sessionStorage/);
  assert.match(app, /textContent/);
});

test('manifest has no functions, resolver, storage, remotes, write scope or triggers', async () => {
  const manifest = (await readFile(new URL('../manifest.yml', import.meta.url), 'utf8'))
    .split('\n').filter(line => !line.trimStart().startsWith('#')).join('\n');
  assert.doesNotMatch(manifest, /\b(function|resolver|storage|sql|remotes|scheduledTrigger|webtrigger|rovo:agent|container):/i);
  assert.doesNotMatch(manifest, /write:|storage:app|render:\s*native/);
  assert.match(manifest, /read:jira-work/); assert.match(manifest, /nodejs24\.x/);
});
