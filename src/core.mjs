export const MAX_ISSUES = 5;
export const MAX_SNAPSHOT_BYTES = 65536;
export const RULE_VERSION = 'lens-signals/1';
const KEY = /^[A-Z][A-Z0-9_]{0,19}-[1-9][0-9]{0,8}$/;
const CATEGORIES = new Set(['new', 'indeterminate', 'done']);
const encoder = new TextEncoder();
const SYNTHETIC_CONTEXT = 'synthetic-demo/v1';
const CONTEXT = /^sha256:[a-f0-9]{64}$/;

export class LensError extends Error {
  constructor(code) { super(code); this.name = 'LensError'; this.code = code; }
}
const fail = code => { throw new LensError(code); };
const plain = value => value !== null && typeof value === 'object' && !Array.isArray(value)
  && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
function exact(value, fields) {
  if (!plain(value) || Object.keys(value).length !== fields.length
      || fields.some(key => !Object.hasOwn(value, key))) fail('invalid_snapshot');
}
function iso(value, code = 'invalid_snapshot') {
  if (typeof value !== 'string' || value.length > 40 || !Number.isFinite(Date.parse(value))) fail(code);
  const result = new Date(value).toISOString();
  if (result !== value) fail(code);
  return result;
}
function due(value, code = 'invalid_snapshot') {
  if (value === null) return null;
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)
      || !Number.isFinite(Date.parse(`${value}T00:00:00.000Z`))
      || new Date(`${value}T00:00:00.000Z`).toISOString().slice(0, 10) !== value) fail(code);
  return value;
}
function key(value, code = 'invalid_keys') {
  if (typeof value !== 'string' || !KEY.test(value)) fail(code);
  return value;
}
export function parseKeys(input) {
  if (typeof input !== 'string' || input.length > 200) fail('invalid_keys');
  const keys = input.trim().split(/[\s,]+/).filter(Boolean).map(value => key(value.toUpperCase()));
  if (!keys.length || keys.length > MAX_ISSUES || new Set(keys).size !== keys.length) fail('invalid_keys');
  return keys;
}
function safeIssue(value, code = 'invalid_snapshot') {
  exact(value, ['key', 'statusCategory', 'updated', 'dueDate']);
  if (!CATEGORIES.has(value.statusCategory)) fail(code);
  return { key: key(value.key, code), statusCategory: value.statusCategory,
    updated: iso(value.updated, code), dueDate: due(value.dueDate, code) };
}

export function normaliseJiraIssue(raw, requestedKey) {
  key(requestedKey);
  if (!plain(raw) || raw.key !== requestedKey || !plain(raw.fields)
      || !plain(raw.fields.status) || !plain(raw.fields.status.statusCategory)
      || !CATEGORIES.has(raw.fields.status.statusCategory.key)
      || typeof raw.fields.updated !== 'string' || raw.fields.updated.length > 40
      || !Number.isFinite(Date.parse(raw.fields.updated))
      || !Object.hasOwn(raw.fields, 'duedate')) fail('invalid_response');
  return { key: requestedKey, statusCategory: raw.fields.status.statusCategory.key,
    updated: new Date(raw.fields.updated).toISOString(), dueDate: due(raw.fields.duedate, 'invalid_response') };
}

// This adapter exposes only one operation and constructs the entire URI itself.
// It never accepts a caller-provided URL or method; provider error bodies are discarded.
export function createJiraAdapter(requestJira, { sourceContext = null } = {}) {
  if (typeof requestJira !== 'function') fail('invalid_adapter');
  if (sourceContext !== null && !CONTEXT.test(sourceContext)) fail('invalid_adapter');
  return Object.freeze({ kind: 'jira', sourceContext, async readIssue(issueKey) {
    key(issueKey);
    let response;
    try {
      response = await requestJira(`/rest/api/3/issue/${encodeURIComponent(issueKey)}?fields=status,updated,duedate`,
        { method: 'GET', headers: { Accept: 'application/json' } });
    } catch { fail('unavailable'); }
    if (!response || !Number.isInteger(response.status)) fail('invalid_response');
    if (response.status === 403) fail('forbidden');
    if (response.status === 404) fail('not_found');
    if (response.status === 429) fail('rate_limited');
    if (response.status !== 200) fail('unavailable');
    let raw;
    try { raw = await response.json(); } catch { fail('invalid_response'); }
    return normaliseJiraIssue(raw, issueKey);
  } });
}

function canonicalBody(snapshot) {
  return JSON.stringify({ schemaVersion: 1, sourceMode: snapshot.sourceMode, sourceContext: snapshot.sourceContext, ruleVersion: snapshot.ruleVersion,
    capturedAt: snapshot.capturedAt, issues: snapshot.issues.map(issue => ({
      key: issue.key, statusCategory: issue.statusCategory, updated: issue.updated, dueDate: issue.dueDate
    })).sort((a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0) });
}
export async function contextFingerprint(cloudId) {
  if (typeof cloudId !== 'string' || cloudId.length < 1 || cloudId.length > 128) fail('invalid_context');
  const bytes = await globalThis.crypto.subtle.digest('SHA-256', encoder.encode(`handoff-lens:tenant:v1:${cloudId}`));
  return `sha256:${Array.from(new Uint8Array(bytes), value => value.toString(16).padStart(2, '0')).join('')}`;
}
export async function checksum(snapshot) {
  const bytes = await globalThis.crypto.subtle.digest('SHA-256', encoder.encode(canonicalBody(snapshot)));
  return Array.from(new Uint8Array(bytes), value => value.toString(16).padStart(2, '0')).join('');
}
export async function parseSnapshot(text) {
  if (typeof text !== 'string' || encoder.encode(text).byteLength > MAX_SNAPSHOT_BYTES) fail('snapshot_too_large');
  let raw;
  try { raw = JSON.parse(text); } catch { fail('invalid_snapshot'); }
  exact(raw, ['schemaVersion', 'sourceMode', 'sourceContext', 'ruleVersion', 'capturedAt', 'issues', 'digest']);
  if (raw.schemaVersion !== 1 || !['synthetic', 'jira'].includes(raw.sourceMode) || typeof raw.ruleVersion !== 'string'
      || typeof raw.sourceContext !== 'string'
      || (raw.sourceMode === 'synthetic' ? raw.sourceContext !== SYNTHETIC_CONTEXT : !CONTEXT.test(raw.sourceContext))
      || !/^lens-signals\/[1-9][0-9]{0,3}$/.test(raw.ruleVersion)
      || !Array.isArray(raw.issues) || raw.issues.length < 1 || raw.issues.length > MAX_ISSUES
      || typeof raw.digest !== 'string' || !/^[a-f0-9]{64}$/.test(raw.digest)) fail('invalid_snapshot');
  const issues = raw.issues.map(value => safeIssue(value));
  if (new Set(issues.map(value => value.key)).size !== issues.length) fail('invalid_snapshot');
  const parsed = { schemaVersion: 1, sourceMode: raw.sourceMode, sourceContext: raw.sourceContext, ruleVersion: raw.ruleVersion, capturedAt: iso(raw.capturedAt), issues,
    digest: raw.digest };
  if (await checksum(parsed) !== parsed.digest) fail('checksum_mismatch');
  return parsed;
}

export function signals(issue, now) {
  const delta = now.getTime() - Date.parse(issue.updated);
  const freshness = delta < -300000 ? 'future' : delta > 48 * 3600000 ? 'stale' : 'fresh';
  const dueState = issue.dueDate === null ? 'none'
    : issue.dueDate < now.toISOString().slice(0, 10) && issue.statusCategory !== 'done' ? 'overdue' : 'not_overdue';
  return { workflow: issue.statusCategory === 'done' ? 'done' : 'open', freshness, due: dueState,
    outcome: freshness === 'future' ? 'unknown'
      : issue.statusCategory !== 'done' || freshness === 'stale' || dueState === 'overdue' ? 'attention' : 'clear' };
}
function compare(current, previous, now, snapshot) {
  if (!previous) return { state: 'no_reference', fields: [], ageChanged: false, ruleChanged: false };
  const fields = ['statusCategory', 'updated', 'dueDate'].filter(field => current[field] !== previous[field]);
  // Rule ageing is evaluated with the same current rule at each claimed capture time.
  // Imported timestamps are untrusted; this is a comparison, not a trusted audit trail.
  return { state: fields.length ? 'changed' : 'same', fields,
    ageChanged: signals(previous, new Date(snapshot.capturedAt)).freshness !== signals(current, now).freshness,
    ruleChanged: snapshot.ruleVersion !== RULE_VERSION };
}
function bounded(promise, timeoutMs) {
  let timer;
  return Promise.race([promise, new Promise((_, reject) => {
    timer = setTimeout(() => reject(new LensError('timeout')), timeoutMs);
  })]).finally(() => clearTimeout(timer));
}
const SAFE_ERRORS = new Set(['forbidden', 'not_found', 'rate_limited', 'unavailable', 'invalid_response', 'timeout']);
export function createLens({ adapter, now = () => new Date(), timeoutMs = 8000 }) {
  if (!adapter || typeof adapter.readIssue !== 'function' || !['jira', 'synthetic'].includes(adapter.kind)
      || !Number.isInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > 15000) fail('invalid_adapter');
  const sourceContext = adapter.kind === 'synthetic' ? SYNTHETIC_CONTEXT : adapter.sourceContext;
  if (adapter.kind === 'jira' && sourceContext !== null && !CONTEXT.test(sourceContext)) fail('invalid_adapter');
  let busy = false;
  let priorReadsStillPending = 0;
  return Object.freeze({ async inspect({ keys, snapshot = null }) {
    if (busy || priorReadsStillPending > 0) fail('busy');
    if (!Array.isArray(keys) || keys.length < 1 || keys.length > MAX_ISSUES
        || new Set(keys).size !== keys.length) fail('invalid_keys');
    keys.forEach(value => key(value));
    // Revalidate copies, including digest, even if a caller bypassed parseSnapshot.
    const reference = snapshot === null ? null : await parseSnapshot(JSON.stringify(snapshot));
    if (reference && (reference.sourceMode !== adapter.kind || !sourceContext
        || reference.sourceContext !== sourceContext)) fail('source_mismatch');
    if (busy || priorReadsStillPending > 0) fail('busy');
    busy = true;
    try {
      const capturedAt = iso(now().toISOString(), 'invalid_clock');
      const instant = new Date(capturedAt);
      const rows = await Promise.all(keys.map(async (issueKey, index) => {
        priorReadsStillPending++;
        const read = Promise.resolve().then(() => adapter.readIssue(issueKey))
          .finally(() => { priorReadsStillPending--; });
        try {
          const current = safeIssue(await bounded(read, timeoutMs), 'invalid_response');
          if (current.key !== issueKey) fail('invalid_response');
          const previous = reference?.issues.find(value => value.key === issueKey) ?? null;
          return { slot: index + 1, state: 'read', current, previous,
            signals: signals(current, instant), comparison: compare(current, previous, instant, reference) };
        } catch (error) {
          // No key, imported field, response text or raw exception escapes on failed authorization.
          return { slot: index + 1, state: 'unavailable', reason: SAFE_ERRORS.has(error?.code) ? error.code : 'unavailable' };
        }
      }));
      const canCompare = rows.some(row => row.state === 'read' && row.previous !== null);
      return { schemaVersion: 1, ruleVersion: RULE_VERSION, capturedAt, mode: adapter.kind, sourceContext, rows,
        snapshot: reference && canCompare ? { capturedAt: reference.capturedAt, sourceMode: reference.sourceMode,
          ruleVersion: reference.ruleVersion, untrusted: true,
          scopeChanged: reference.issues.length !== keys.length || reference.issues.some(value => !keys.includes(value.key)) } : null,
        exportable: Boolean(sourceContext) && rows.every(row => row.state === 'read') };
    } finally { busy = false; }
  } });
}
export async function createSnapshot(report) {
  if (!report || !report.exportable || !Array.isArray(report.rows)
      || !report.rows.length || report.rows.length > MAX_ISSUES
      || report.rows.some(row => row.state !== 'read')) fail('incomplete_snapshot');
  if (!['synthetic', 'jira'].includes(report.mode)) fail('incomplete_snapshot');
  if (report.mode === 'synthetic' ? report.sourceContext !== SYNTHETIC_CONTEXT : !CONTEXT.test(report.sourceContext)) fail('incomplete_snapshot');
  const snapshot = { schemaVersion: 1, sourceMode: report.mode, sourceContext: report.sourceContext, ruleVersion: RULE_VERSION, capturedAt: iso(report.capturedAt),
    issues: report.rows.map(row => safeIssue(row.current)) };
  if (new Set(snapshot.issues.map(value => value.key)).size !== snapshot.issues.length) fail('invalid_snapshot');
  return { ...snapshot, digest: await checksum(snapshot) };
}
