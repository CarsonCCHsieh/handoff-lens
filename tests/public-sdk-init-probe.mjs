// Read-only execution probe of the local public-entry browser artifact.
// The only write is the explicitly assigned .local/test-results/public-sdk-init-probe.json.
// Synthetic VM observations are not browser, Jira, Forge or billing validation.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { createHash, webcrypto } from 'node:crypto';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const resourcePath = path.join(root, 'forge-build/app.mjs');
const sourceBytes = fs.readFileSync(resourcePath);
const source = sourceBytes.toString('utf8');
// This probe accepts a self-contained bundle without ESM import/export syntax.
// An async wrapper preserves its top-level await without experimental VM flags.
if (/^\s*(?:import\s|export\s)/m.test(source)) {
  throw new Error('Probe expects a self-contained browser bundle with no ESM imports/exports.');
}
const effects = [];
const capturedTimers = new Map();
let timersCleared = 0;
const blocked = kind => () => {
  effects.push({ kind });
  throw new Error(`Local probe blocked ${kind}`);
};
const sandbox = {
  TextEncoder, TextDecoder, URL, URLSearchParams, Request, Response, Headers,
  Blob, FormData, crypto: webcrypto,
  console: { log: blocked('console.log'), warn: blocked('console.warn'), error: blocked('console.error') },
  fetch: blocked('fetch'), WebSocket: blocked('WebSocket'),
  XMLHttpRequest: blocked('XMLHttpRequest'), EventSource: blocked('EventSource'),
  Worker: blocked('Worker'), Image: blocked('Image'),
  setTimeout(callback, delayMs) {
    effects.push({ kind: 'setTimeout', delayMs });
    if (typeof callback !== 'function' || delayMs !== 8000 || capturedTimers.size !== 0) {
      throw new Error('Local probe permits exactly one 8000 ms context timeout');
    }
    // Capture only: never schedule a real eight-second timer or run the callback.
    const timerId = 1;
    capturedTimers.set(timerId, callback);
    return timerId;
  },
  clearTimeout(timerId) {
    effects.push({ kind: 'clearTimeout' });
    if (!capturedTimers.has(timerId)) throw new Error('Unknown local probe timer');
    capturedTimers.delete(timerId);
    timersCleared++;
  },
  setInterval: blocked('setInterval'),
  requestAnimationFrame: blocked('requestAnimationFrame'),
  localStorage: new Proxy({}, { get: blocked('localStorage') }),
  sessionStorage: new Proxy({}, { get: blocked('sessionStorage') }),
  document: new Proxy({}, { get: blocked('document.read'), set: blocked('document.write') }),
  navigator: { sendBeacon: blocked('sendBeacon') },
  __bridge: {
    callBridge(name) {
      effects.push({ kind: 'bridge', name: typeof name === 'string' ? name : 'non-string' });
      // Hold before mounting the app: this isolates SDK import/initialisation.
      if (name === 'getContext') return new Promise(() => {});
      throw new Error('Local probe blocked an unexpected bridge operation');
    }
  }
};
const context = vm.createContext(sandbox, { codeGeneration: { strings: false, wasm: false } });
new vm.Script('globalThis.window=globalThis;globalThis.self=globalThis;')
  .runInContext(context, { timeout: 2000 });
let evaluationSettled = false;
let error = null;
try {
  const evaluation = new vm.Script(`(async () => {\n${source}\n})()`, {
    filename: 'local-public-browser-bundle'
  }).runInContext(context, { timeout: 2000 });
  evaluation.then(
    () => { evaluationSettled = true; },
    failure => {
      evaluationSettled = true;
      // Avoid persisting provider text, raw context or unexpected payloads.
      error = { name: typeof failure?.name === 'string' ? failure.name : 'UnknownError' };
    }
  );
} catch (failure) {
  evaluationSettled = true;
  error = { name: typeof failure?.name === 'string' ? failure.name : 'UnknownError' };
}
const observationMs = 30;
await new Promise(resolve => setTimeout(resolve, observationMs));
const contextEffects = effects.filter(effect => effect.kind === 'bridge' && effect.name === 'getContext');
const timeoutEffects = effects.filter(effect => effect.kind === 'setTimeout' && effect.delayMs === 8000);
const expectedPendingContext = effects.length === 2 && contextEffects.length === 1
  && timeoutEffects.length === 1 && capturedTimers.size === 1 && timersCleared === 0;
const passed = expectedPendingContext && !evaluationSettled && error === null;
const receipt = {
  schemaVersion: 1,
  createdUTC: new Date().toISOString(),
  kind: 'guarded-synthetic-vm-public-sdk-initialisation-probe',
  nodeVersion: process.versions.node,
  artifact: 'forge-build/app.mjs',
  artifactBytes: sourceBytes.byteLength,
  artifactSha256: createHash('sha256').update(sourceBytes).digest('hex'),
  experimentalVmFlagsUsed: false,
  vmApi: 'vm.Script async wrapper',
  codeGenerationAllowed: { strings: false, wasm: false },
  observationMs,
  effects,
  contextTimeoutCapture: {
    scheduledCount: timeoutEffects.length,
    delayMs: 8000,
    callbacksExecuted: 0,
    realWallClockTimerScheduled: false,
    clearedCount: timersCleared
  },
  evaluationHeldAtSyntheticContextAwait: expectedPendingContext && !evaluationSettled,
  error,
  passed,
  limits: [
    'Fake bridge holds getContext pending before the app mounts; this observes SDK import and initialisation only.',
    'The single 8000 ms context-timeout callback is captured without executing it; timeout recovery is outside this probe.',
    'No real browser, Forge iframe, Jira, account, installation, billing or permission behavior was tested.',
    'Unused SDK APIs remain present; absence of an observed call is not absence of that code or a universal future guarantee.',
    'The VM is a local test harness for known source, not a security boundary for untrusted code.'
  ]
};
fs.mkdirSync(path.join(root, '.local/test-results'), { recursive: true });
fs.writeFileSync(path.join(root, '.local/test-results/public-sdk-init-probe.json'), JSON.stringify(receipt, null, 2) + '\n');
console.log(JSON.stringify({ passed, effects, experimentalVmFlagsUsed: false }));
if (!passed) process.exitCode = 1;
