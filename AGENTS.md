# Project operations

- This is the real project workspace. The parent/root task owns authentication,
  app registration, deployment and installation under the user's existing
  participation authorization. A local-only subtask does not grant those
  actions to its agent or require the user to reapprove already authorized work.
- The manifest contains the registered Handoff Lens app ID. Preserve that ID
  across updates; do not register a duplicate app. Do not
  put tokens, credential files, raw account context, private receipts or real
  Jira snapshots in source, commits, screenshots or public logs.
- Preserve the public SDK, current-user fixed GET adapter, maximum five reads
  per deliberate action, read-only scope and no automatic retries/refresh.
  Keep synthetic adapters and bridge mocks under tests, outside runtime inputs.
- Existing authorization permits no added expense. Do not add payment methods,
  accept paid plans or introduce backend functions/storage/LLM/remote services
  as routine setup. Record actual deployment and cost observations separately
  from local tests; missing payment details are not a spending cap.
- Use local esbuild through `npm run build`; `forge build` uploads to Atlassian.
  Run the existing core and bundle checks for relevant runtime/build changes.
  Before publishing, scan the exact prospective source set for credentials and
  personal data, and keep generated `.local/` and real data excluded.
- Documentation must distinguish local, synthetic, real Jira, installed and
  submitted states. Do not claim pending checks passed.
