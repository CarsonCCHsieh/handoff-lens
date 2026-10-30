import { requestJira, view } from '@forge/bridge';
import { createJiraAdapter, parseKeys, contextFingerprint } from './core.mjs';
import { mountWorkbench } from './app.mjs';

// Context is only a convenience. Do not persist or log raw account/site context.
// It is not authentication, proof of identity, or a trusted file provenance.
// No Jira read starts until the user submits Check selected issues.
let initialKeys = '';
let sourceContext = null;
let contextTimer;
try {
  // A stalled metadata bridge must not leave the entire workbench blank.
  // No retry or Jira read is triggered on timeout; late context is ignored.
  const context = await Promise.race([
    view.getContext(),
    new Promise((_, reject) => {
      contextTimer = setTimeout(() => reject(new Error('context_unavailable')), 8000);
    })
  ]);
  const candidate = context?.extension?.issue?.key;
  if (typeof candidate === 'string') initialKeys = parseKeys(candidate).join(', ');
  if (typeof context?.cloudId === 'string') sourceContext = await contextFingerprint(context.cloudId);
} catch { /* Manual entry remains available; do not print context/provider errors. */ }
finally { clearTimeout(contextTimer); }
mountWorkbench({ adapter: createJiraAdapter(requestJira, { sourceContext }), initialKeys });
