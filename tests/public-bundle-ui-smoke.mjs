// Synthetic minimal-DOM smoke of the actual bundle. Not a browser/Jira test.
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { webcrypto, createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { checksum, contextFingerprint } from '../src/core.mjs';
import { messages } from '../src/i18n.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const bundle = await fs.readFile(path.join(root, 'forge-build/app.mjs'), 'utf8');
const html = await fs.readFile(path.join(root, 'forge-build/index.html'), 'utf8');
const effects = [];
const calls = [];
const pendingContext = process.argv.includes('--pending-context');
const timerDelays = [];
let contextTimerCleared = false;
let contextTimerToken;
const nodes = new Map();
class Element {
  constructor(tag = 'div') { this.tagName = tag.toUpperCase(); this.children = []; this.handlers = {};
    this.style = {}; this.dataset = {}; this.value = ''; this.disabled = false; this._text = ''; }
  set textContent(text) { this._text = String(text); this.children = []; }
  get textContent() { return this._text + this.children.map(node => node.textContent ?? '').join(''); }
  append(...children) { this.children.push(...children); }
  appendChild(child) { this.append(child); }
  replaceChildren(...children) { this._text = ''; this.children = children; }
  addEventListener(type, handler) { (this.handlers[type] ??= []).push(handler); }
  removeEventListener() {}
  remove() {}
  click() { effects.push({ kind: 'synthetic-dom-click' }); }
}
for (const match of html.matchAll(/\bid="([^"]+)"/g)) nodes.set(match[1], new Element());
const translated = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(match => {
  const node = new Element(); node.dataset.i18n = match[1]; return node;
});
for (const language of ['en', 'zh-Hant', 'ja']) {
  for (const node of translated) assert.equal(typeof messages[language][node.dataset.i18n], 'string');
}
assert.match(html, /<details\b[^>]*id="paste-reference"/);
assert.match(html, /<label\b[^>]*for="reference-json"/);
assert.match(html, /<textarea\b[^>]*id="reference-json"[^>]*aria-describedby="reference-json-hint"/);
assert.match(html, /<button\b[^>]*id="import-json"[^>]*type="button"/);
const document = {
  readyState: 'loading', referrer: 'https://host.synthetic.invalid/jira',
  documentElement: new Element('html'), body: new Element('body'),
  getElementById: id => nodes.get(id) ?? null,
  querySelectorAll: selector => selector === '[data-i18n]' ? translated : [],
  querySelector: selector => selector === 'body' ? document.body : null,
  createElement: tag => new Element(tag), addEventListener() {}, removeEventListener() {},
  getElementsByName: () => []
};
const blocked = kind => (...args) => { effects.push({ kind }); throw new Error('Unexpected external effect: ' + kind); };
const context = {
  document, console: { log: blocked('console'), error: blocked('console'), warn: blocked('console'), info: blocked('console') },
  crypto: webcrypto, TextEncoder, TextDecoder, Headers, Blob, FormData,
  NativeRequest: Request, URL, atob, btoa,
  setTimeout(callback, delay, ...args) {
    timerDelays.push(delay);
    // Accelerate only the metadata timeout in this synthetic case. Production
    // delay is asserted as 8000; this separate probe does not alter the bundle.
    const token = setTimeout(callback, pendingContext && timerDelays.length === 1 ? 10 : delay, ...args);
    if (timerDelays.length === 1) contextTimerToken = token;
    return token;
  },
  clearTimeout(token) { if (token === contextTimerToken) contextTimerCleared = true; clearTimeout(token); },
  setInterval: blocked('interval'), clearInterval,
  fetch: blocked('fetch'), WebSocket: blocked('WebSocket'), XMLHttpRequest: blocked('XMLHttpRequest'),
  EventSource: blocked('EventSource'), Worker: blocked('Worker'), Image: blocked('Image'),
  navigator: { sendBeacon: blocked('sendBeacon') },
  location: { href: 'https://resource.synthetic.invalid/index.html' },
  addEventListener() {}, removeEventListener() {},
  __bridge: { async callBridge(name, payload) {
    calls.push({ name, payload });
    if (name === 'getContext') return pendingContext ? new Promise(() => {})
      : { cloudId: 'synthetic-tenant-probe', extension: { issue: { key: 'DEMO-1' } }, locale: 'en-US' };
    assert.equal(name, 'fetchProduct');
    assert.equal(payload.product, 'jira');
    assert.equal(payload.fetchRequestInit.method, 'GET');
    assert.match(payload.restPath, /^\/rest\/api\/3\/issue\/DEMO-[1-5]\?fields=status,updated,duedate$/);
    const issueKey = payload.restPath.match(/issue\/(DEMO-[1-5])/)[1];
    return { status: 200, statusText: 'OK', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ key: issueKey, fields: { status: { statusCategory: { key: 'done' } },
        updated: '2026-10-30T07:00:00.000Z', duedate: null } }) };
  } }
};
context.window = context; context.self = context; context.top = context;
context.parent = { postMessage: blocked('postMessage') };
document.defaultView = context;
Object.defineProperty(document, 'cookie', { get: blocked('cookie'), set: blocked('cookie') });
for (const key of ['localStorage', 'sessionStorage', 'indexedDB']) Object.defineProperty(context, key, { get: blocked(key) });
vm.createContext(context, { codeGeneration: { strings: false, wasm: false } });
// The browser resolves Request('') against its document URL. Keep that behavior
// in this Node-only mock and parse JSON inside the VM's own object realm.
vm.runInContext(`
  globalThis.Request = class extends NativeRequest {
    constructor(input, options) { super(new URL(input || '.', location.href), options); }
  };
  globalThis.Response = class {
    constructor(body, init) { this.body = body; Object.assign(this, init); }
    async json() { return JSON.parse(this.body); }
  };
`, context);
await new vm.Script('(async () => {\n' + bundle + '\n})()', { filename: 'actual-public-bundle.mjs' }).runInContext(context, { timeout: 3000 });
assert.deepEqual(calls.map(call => call.name), ['getContext']);
assert.equal(nodes.get('issue-keys').value, pendingContext ? '' : 'DEMO-1');
assert.equal(nodes.get('scenario-field').hidden, true);
assert.equal(timerDelays[0], 8000);
assert.equal(contextTimerCleared, true);
assert.equal(nodes.get('download').disabled, true);
async function submit(value) {
  nodes.get('issue-keys').value = value;
  for (const handler of nodes.get('scope-form').handlers.submit) await handler({ preventDefault() {} });
}
await submit('DEMO-1,DEMO-2,DEMO-3,DEMO-4,DEMO-5,DEMO-6');
assert.equal(calls.length, 1, 'Six keys must fail before any issue request.');
await submit('DEMO-1,DEMO-2,DEMO-3,DEMO-4,DEMO-5');
assert.equal(calls.length, 6);
assert.equal(nodes.get('results').children.length, 5);
assert.equal(nodes.get('download').disabled, pendingContext);
for (const language of ['zh-Hant', 'ja', 'en']) {
  for (const handler of nodes.get('language').handlers.change) await handler({ target: { value: language } });
  assert.equal(document.documentElement.lang, language);
}
assert.equal(calls.length, 6, 'Language changes must not read issues.');
const reference = {
  schemaVersion: 1, sourceMode: 'jira', sourceContext: await contextFingerprint('synthetic-tenant-probe'),
  ruleVersion: 'lens-signals/1', capturedAt: '2026-10-29T07:00:00.000Z',
  issues: [{ key: 'DEMO-1', statusCategory: 'new', updated: '2026-10-29T07:00:00.000Z', dueDate: null }]
};
reference.digest = await checksum(reference);
const referenceText = JSON.stringify(reference);
async function click(id) {
  for (const handler of nodes.get(id).handlers.click) await handler();
}
async function paste(text, checkBusy = false) {
  nodes.get('reference-json').value = text;
  for (const handler of nodes.get('import-json').handlers.click) {
    const pending = handler();
    if (checkBusy) {
      assert.equal(nodes.get('reference-json').disabled, true);
      assert.equal(nodes.get('import-json').disabled, true);
      assert.equal(nodes.get('reference-file').disabled, true);
    }
    await pending;
  }
}
await paste(referenceText, true);
assert.equal(calls.length, 6, 'Pasted reference validation must not read Jira.');
assert.equal(nodes.get('reference-json').value, '');
assert.equal(nodes.get('results').children.length, 0, 'Import must discard the previous report.');
assert.equal(nodes.get('download').disabled, true);
assert.equal(nodes.get('use-scope').disabled, false);
assert.equal(nodes.get('status').textContent, messages.en.imported);
await click('use-scope');
assert.equal(nodes.get('issue-keys').value, '');
await submit('');
const expectedIssueGets = pendingContext ? 5 : 6;
assert.equal(calls.length, 1 + expectedIssueGets);
if (pendingContext) {
  assert.equal(nodes.get('status').textContent, messages.en.source_mismatch);
  assert.equal(nodes.get('results').children.length, 0);
} else {
  assert.equal(nodes.get('results').children.length, 1);
  assert.ok(nodes.get('results').textContent.includes(messages.en.changed));
  assert.ok(nodes.get('results').textContent.includes(messages.en.previous));
  assert.equal(nodes.get('download').disabled, false);
}
const tamperedReference = JSON.parse(referenceText);
tamperedReference.issues[0].statusCategory = 'done';
for (const [text, expectedStatus] of [
  ['{"invalid":', messages.en.invalid_snapshot],
  ['界'.repeat(21846), messages.en.snapshot_too_large],
  [JSON.stringify(tamperedReference), messages.en.checksum_mismatch]
]) {
  await paste(text);
  assert.equal(nodes.get('status').textContent, expectedStatus);
  assert.equal(nodes.get('reference-json').value, '');
  assert.equal(nodes.get('results').children.length, 0);
  assert.equal(nodes.get('use-scope').disabled, true, 'Failed import must remove the old reference.');
  assert.equal(nodes.get('download').disabled, true);
  assert.equal(calls.length, 1 + expectedIssueGets, 'Invalid paste must not read Jira.');
  await paste(referenceText);
  assert.equal(nodes.get('use-scope').disabled, false);
}
nodes.get('reference-json').value = 'draft to discard';
nodes.get('reference-file').value = 'synthetic-reference.json';
nodes.get('reference-file').files = [{ size: new TextEncoder().encode(referenceText).byteLength,
  async text() { return referenceText; } }];
for (const handler of nodes.get('reference-file').handlers.change) await handler({ target: nodes.get('reference-file') });
assert.equal(nodes.get('status').textContent, messages.en.imported);
assert.equal(nodes.get('reference-file').value, '');
assert.equal(nodes.get('reference-json').value, '');
assert.equal(nodes.get('use-scope').disabled, false, 'File import must still use the same validation flow.');
assert.equal(calls.length, 1 + expectedIssueGets, 'File import must not read Jira.');
const otherTenantReference = JSON.parse(referenceText);
otherTenantReference.sourceContext = await contextFingerprint('other-synthetic-tenant');
otherTenantReference.digest = await checksum(otherTenantReference);
await paste(JSON.stringify(otherTenantReference));
await click('use-scope');
await submit('');
assert.equal(nodes.get('status').textContent, messages.en.source_mismatch);
assert.equal(calls.length, 1 + expectedIssueGets, 'Tenant mismatch must reject before issue reads.');
assert.equal(nodes.get('results').children.length, 0);
assert.equal(nodes.get('download').disabled, true);
nodes.get('reference-json').value = referenceText;
await click('clear');
assert.equal(nodes.get('reference-json').value, '');
assert.equal(nodes.get('use-scope').disabled, true);
assert.equal(nodes.get('status').textContent, messages.en.removed);
await new Promise(resolve => setTimeout(resolve, 30));
assert.equal(calls.length, 1 + expectedIssueGets, 'No automatic follow-up reads.');
assert.deepEqual(effects, []);
const receipt = {
  createdUTC: new Date().toISOString(), nodeVersion: process.versions.node, passed: true,
  kind: 'actual-public-bundle-synthetic-minimal-dom-smoke',
  artifactSha256: createHash('sha256').update(bundle).digest('hex'),
  contextCase: pendingContext ? 'never-settles-then-bounded-timeout' : 'resolved-context',
  contextTimeoutMs: timerDelays[0], contextTimerCleared,
  fallbackMountHasNoIssueReads: true,
  missingContextDisablesSnapshotExport: pendingContext ? nodes.get('download').disabled : null,
  sdkBridgeCalls: { getContext: 1, fetchProduct: expectedIssueGets, other: 0 },
  allIssueReads: { method: 'GET', fixedPath: '/rest/api/3/issue/{validated-key}?fields=status,updated,duedate',
    triggeredByExplicitSubmit: true, maximumFive: true, sixKeysRejectedBeforeReads: true },
  languageChanges: ['zh-Hant', 'ja', 'en'], automaticFollowUpReadsObserved: 0,
  pastedReference: { validImportWithoutReads: true, clearsPriorReport: true,
    explicitComparison: !pendingContext, missingContextRejectedBeforeReads: pendingContext,
    invalidJsonRejected: true, utf8ByteLimitEnforced: true, checksumMismatchRejected: true,
    tenantMismatchRejectedBeforeReads: true, clearRemovesPastedText: true, fileImportPreserved: true },
  forbiddenEffects: effects, realBrowser: false, realJira: false,
  limits: ['Minimal synthetic DOM is not real rendering, accessibility, iframe behavior or Jira permission evidence.',
    'Mock bridge and Request/Response semantics are used only by this separate probe; production resource uses real SDK.']
};
await fs.mkdir(path.join(root, '.local/test-results'), { recursive: true });
await fs.writeFile(path.join(root, pendingContext ? '.local/test-results/public-bundle-context-timeout.json' : '.local/test-results/public-bundle-ui-smoke.json'), JSON.stringify(receipt, null, 2) + '\n');
console.log(JSON.stringify({ passed: true, contextCalls: 1, explicitIssueGets: expectedIssueGets,
  sixKeysRejectedBeforeReads: true, languageChanges: 3, forbiddenEffects: 0,
  pastedReferenceGuards: true,
  contextTimeoutMs: timerDelays[0], contextTimerCleared, pendingContext, realJira: false }));
