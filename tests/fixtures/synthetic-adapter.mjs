import { LensError } from '../../src/core.mjs';

// Authored synthetic metadata only. No real Jira records or identities.
export function createSyntheticAdapter({ scenario = 'baseline', now = () => new Date() } = {}) {
  return Object.freeze({ kind: 'synthetic', async readIssue(key) {
    if (!['DEMO-1', 'DEMO-2', 'DEMO-3', 'DEMO-4', 'DEMO-5'].includes(key)) throw new LensError('not_found');
    if (scenario === 'permission' && key === 'DEMO-2') throw new LensError('forbidden');
    const changed = scenario === 'drift' && key === 'DEMO-2';
    const hours = changed ? 72 : key === 'DEMO-3' ? 80 : 2;
    return { key, statusCategory: changed ? 'indeterminate' : 'done',
      updated: new Date(now().getTime() - hours * 3600000).toISOString(), dueDate: null };
  } });
}
