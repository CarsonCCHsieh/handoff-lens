import { createLens, createSnapshot, parseKeys, parseSnapshot, MAX_SNAPSHOT_BYTES } from './core.mjs';
import { messages } from './i18n.mjs';

export function mountWorkbench({ adapter, initialKeys = '', onScenarioChange = null }) {
  const $ = id => document.getElementById(id);
  const lens = createLens({ adapter });
  const state = { language: 'en', snapshot: null, report: null, serialized: '', busy: false,
    useReference: false, status: 'empty' };
  $('issue-keys').value = initialKeys;
  $('scenario-field').hidden = adapter.kind !== 'synthetic';
  const t = value => messages[state.language][value] ?? messages.en[value] ?? messages[state.language].generic;
  function node(tag, text, className) {
    const item = document.createElement(tag);
    if (text !== undefined) item.textContent = text;
    if (className) item.className = className;
    return item;
  }
  function datum(parent, label, value) {
    const row = node('div', undefined, 'datum');
    row.append(node('dt', label), node('dd', value)); parent.append(row);
  }
  function issueData(issue) {
    const list = node('dl');
    datum(list, t('state'), t(issue.statusCategory));
    datum(list, t('updated'), issue.updated);
    datum(list, t('due'), issue.dueDate ?? t('noDue'));
    return list;
  }
  function render() {
    document.documentElement.lang = state.language;
    document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = t(element.dataset.i18n); });
    $('mode').textContent = t(adapter.kind);
    $('status').textContent = t(state.busy ? 'checking' : state.status);
    const meta = $('report-meta'); const output = $('results');
    meta.replaceChildren(); output.replaceChildren();
    const report = state.report;
    if (report) {
      meta.append(node('p', `${t('readAt')}: ${report.capturedAt}`, 'hint'));
      if (report.snapshot) {
        meta.append(node('p', `${t('referenceAt')}: ${report.snapshot.capturedAt}`, 'hint'));
        meta.append(node('p', `${t('sourceMode')}: ${report.snapshot.sourceMode} (${t('unknown')})`, 'hint'));
        if (report.snapshot.scopeChanged) meta.append(node('p', t('scopeChanged'), 'warning'));
      }
      for (const row of report.rows) {
        const card = node('article', undefined, 'issue');
        if (row.state !== 'read') {
          card.append(node('h2', `${t('item')} ${row.slot}`), node('p', t('unavailable'), 'warning'),
            node('p', t(row.reason === 'unavailable' ? 'unavailableReason' : row.reason)));
          output.append(card); continue;
        }
        const top = node('div', undefined, 'card-top');
        top.append(node('h2', row.current.key), node('span', t(row.signals.outcome === 'clear' ? 'clearSignal' : row.signals.outcome), `pill ${row.signals.outcome}`));
        card.append(top, issueData(row.current));
        card.append(node('p', `${t('freshness')}: ${t(row.signals.freshness)}`, 'hint'));
        if (row.signals.due === 'overdue') card.append(node('p', t('overdue'), 'warning'));
        card.append(node('p', `${t('comparison')}: ${t(row.comparison.state)}`));
        if (row.comparison.fields.length) card.append(node('p', `${t('fields')}: ${row.comparison.fields.join(', ')}`, 'hint'));
        if (row.comparison.ageChanged) card.append(node('p', t('ageChanged'), 'warning'));
        if (row.comparison.ruleChanged) card.append(node('p', t('ruleChanged'), 'warning'));
        if (row.previous) {
          const details = node('details'); details.append(node('summary', t('previous')), issueData(row.previous)); card.append(details);
        }
        output.append(card);
      }
    }
    for (const id of ['issue-keys', 'scenario', 'check', 'reference-file', 'reference-json', 'import-json', 'use-scope', 'clear']) $(id).disabled = state.busy;
    $('use-scope').disabled = state.busy || !state.snapshot;
    $('download').disabled = state.busy || !state.serialized;
  }
  function discardReport() { state.report = null; state.serialized = ''; }
  function errorCode(error) { return Object.hasOwn(messages.en, error?.code) ? error.code : 'generic'; }
  async function importReference(readText) {
    if (state.busy) return;
    state.snapshot = null; state.useReference = false; discardReport();
    state.busy = true; render();
    try {
      state.snapshot = await parseSnapshot(await readText()); state.status = 'imported';
    } catch (error) { state.status = errorCode(error); }
    finally { state.busy = false; render(); }
  }
  $('language').addEventListener('change', event => {
    state.language = Object.hasOwn(messages, event.target.value) ? event.target.value : 'en'; render();
  });
  $('scenario').addEventListener('change', event => { onScenarioChange?.(event.target.value); discardReport(); state.status = 'empty'; render(); });
  $('issue-keys').addEventListener('input', () => { state.useReference = false; discardReport(); state.status = 'empty'; render(); });
  $('use-scope').addEventListener('click', () => {
    if (!state.snapshot) { state.status = 'importFirst'; render(); return; }
    state.useReference = true; $('issue-keys').value = ''; discardReport(); state.status = 'loadedHint'; render();
  });
  $('reference-file').addEventListener('change', async event => {
    if (state.busy) return;
    const file = event.target.files?.[0];
    if (!file) {
      state.snapshot = null; state.useReference = false; discardReport(); state.status = 'empty'; render(); return;
    }
    $('reference-json').value = '';
    await importReference(async () => {
      if (file.size > MAX_SNAPSHOT_BYTES) throw { code: 'snapshot_too_large' };
      return file.text();
    });
    $('reference-file').value = '';
  });
  $('import-json').addEventListener('click', async () => {
    if (state.busy) return;
    const text = $('reference-json').value;
    $('reference-json').value = ''; $('reference-file').value = '';
    await importReference(() => text);
  });
  $('scope-form').addEventListener('submit', async event => {
    event.preventDefault();
    if (state.busy) return;
    state.busy = true; discardReport(); render();
    try {
      const keys = state.useReference && state.snapshot ? state.snapshot.issues.map(issue => issue.key) : parseKeys($('issue-keys').value);
      state.report = await lens.inspect({ keys, snapshot: state.snapshot });
      if (state.report.exportable) state.serialized = JSON.stringify(await createSnapshot(state.report), null, 2);
      state.status = 'limits';
    } catch (error) { state.status = errorCode(error); }
    finally { state.busy = false; render(); }
  });
  $('download').addEventListener('click', () => {
    if (!state.serialized || state.busy) return;
    // Synchronous user-gesture download; no async preparation or popup.
    const url = URL.createObjectURL(new Blob([state.serialized], { type: 'application/json' }));
    const anchor = document.createElement('a'); anchor.href = url;
    anchor.download = `handoff-lens-${adapter.kind}-snapshot.json`; anchor.hidden = true;
    document.body.append(anchor); anchor.click(); anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('clear').addEventListener('click', () => {
    if (state.busy) return;
    state.snapshot = null; state.useReference = false; discardReport();
    $('issue-keys').value = ''; $('reference-file').value = ''; $('reference-json').value = ''; state.status = 'removed'; render();
  });
  render();
}
