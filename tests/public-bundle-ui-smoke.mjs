// Synthetic minimal-DOM smoke of the actual bundle. Not a browser/Jira test.
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { webcrypto, createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

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
await new Promise(resolve => setTimeout(resolve, 30));
assert.equal(calls.length, 6, 'No automatic follow-up reads.');
assert.deepEqual(effects, []);
const receipt = {
  createdUTC: new Date().toISOString(), nodeVersion: process.versions.node, passed: true,
  kind: 'actual-public-bundle-synthetic-minimal-dom-smoke',
  artifactSha256: createHash('sha256').update(bundle).digest('hex'),
  contextCase: pendingContext ? 'never-settles-then-bounded-timeout' : 'resolved-context',
  contextTimeoutMs: timerDelays[0], contextTimerCleared,
  fallbackMountHasNoIssueReads: true,
  missingContextDisablesSnapshotExport: pendingContext ? nodes.get('download').disabled : null,
  sdkBridgeCalls: { getContext: 1, fetchProduct: 5, other: 0 },
  allIssueReads: { method: 'GET', fixedPath: '/rest/api/3/issue/{validated-key}?fields=status,updated,duedate',
    triggeredByExplicitSubmit: true, maximumFive: true, sixKeysRejectedBeforeReads: true },
  languageChanges: ['zh-Hant', 'ja', 'en'], automaticFollowUpReadsObserved: 0,
  forbiddenEffects: effects, realBrowser: false, realJira: false,
  limits: ['Minimal synthetic DOM is not real rendering, accessibility, iframe behavior or Jira permission evidence.',
    'Mock bridge and Request/Response semantics are used only by this separate probe; production resource uses real SDK.']
};
await fs.mkdir(path.join(root, '.local/test-results'), { recursive: true });
await fs.writeFile(path.join(root, pendingContext ? '.local/test-results/public-bundle-context-timeout.json' : '.local/test-results/public-bundle-ui-smoke.json'), JSON.stringify(receipt, null, 2) + '\n');
console.log(JSON.stringify({ passed: true, contextCalls: 1, explicitIssueGets: 5,
  sixKeysRejectedBeforeReads: true, languageChanges: 3, forbiddenEffects: 0,
  contextTimeoutMs: timerDelays[0], contextTimerCleared, pendingContext, realJira: false }));
