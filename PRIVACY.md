# Privacy and data handling

Last updated: 2026-10-30

This describes the current Handoff Lens implementation. Jira and Forge are
hosted by Atlassian; this document does not replace their policies.

## Data used by the app

An explicit check sends one to five selected issue keys through the Forge
bridge, using the current user's Jira access. The app requests only status,
updated metadata and due date under `read:jira-work`. Its normalized records
contain the issue key, workflow category, updated time and due date. It does not
request issue descriptions, comments or people fields.

Forge context supplies the current issue suggestion and workspace identifier.
The app computes a SHA-256 workspace fingerprint for reference matching; it
does not log or export the raw workspace context. A fingerprint is not
anonymization or proof of identity.

## Memory, imports and downloads

Inputs, imported references and results use page memory. Handoff Lens does not
persist state in browser storage, run an app backend or database, add analytics,
or send data to an LLM. Atlassian still processes the host and Jira requests.

File and pasted-JSON references are validated locally. Import alone sends no
issue request. A later explicit check sends the selected keys to Jira; it does
not upload the reference JSON. Pasted text is visible while entered and cleared
by Import or Clear. Reference fields appear only after matching successful
rereads. A checksum detects content mismatch, not authorship or authorization.

Choosing Download creates a file on your device containing selected issue
metadata, capture/rule information, a workspace fingerprint and a checksum.
These files can be sensitive. You control their storage and sharing; the app
cannot revoke a copy already downloaded or shared.

Clear or reload discards accessible page state. It does not promise secure
erasure of memory, clipboard contents, downloaded files, Jira data or records
held by the host platform. Delete downloaded copies separately when appropriate.

## Host services and support

Atlassian's handling of its services is described in its
[Privacy Policy](https://www.atlassian.com/legal/privacy-policy).
Support uses [GitHub Issues](https://github.com/CarsonCCHsieh/handoff-lens/issues),
which may be public. Do not post credentials, real snapshots or restricted Jira
details. GitHub's service is covered by its own
[Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
See [SUPPORT.md](SUPPORT.md) for a safe report format.
