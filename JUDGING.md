# Judge walkthrough — pending real installation

The local resource and synthetic checks are ready. This project has not yet
been registered, deployed, installed or submitted. There is no judge sharing
link or real-Jira demonstration yet. The all-zero app ID must be replaced by
actual registration before the following walkthrough is usable.

After an owner-verified installation, use a Jira test project containing only
authored demonstration data. Open an issue you can edit and choose the
**Handoff Lens** issue panel.

1. Select one or two issue keys and choose **Check selected issues**. Confirm
   the panel shows current status category, updated time and due date without
   issue titles or people. No issue read should occur before this action.
2. Download a reference JSON, change authored demo metadata in Jira, import the
   reference and check the same scope. Compare field drift separately from
   freshness ageing. Imported contents should stay hidden until reread.
3. Repeat with a second issue the current user cannot read. Its row must show
   unavailable without the issue key or reference fields; export stays disabled.
   Keep restricted real records out of demonstrations and files.
4. Switch English → 繁體中文 → 日本語. Confirm text, focus, keyboard controls,
   narrow-layout behavior and file import/download inside the real iframe.

Before a submission, the owner still needs real Forge lint/deploy/install,
Jira allowed/denied/revoked/missing-response coverage, actual iframe behavior,
the issue-panel visibility check, deployment/usage review, an independent judge
installation link and a recorded working demonstration. Synthetic test success
does not establish those results.

Local checks are documented in [README.md](README.md). Runtime data and cost
boundaries are described in [ARCHITECTURE.md](ARCHITECTURE.md).
