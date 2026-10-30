# Architecture and boundaries

```text
Explicit check of 1–5 selected issue keys
  → static Custom UI → public Forge bridge → current-user Jira GET
  → normalized metadata in memory → local signals/reference comparison
  → optional explicit JSON download
```

`src/entry.mjs` obtains only the current issue suggestion and a domain-separated
fingerprint of the workspace context. It does not log or export the raw cloud
ID. An eight-second metadata timeout mounts a manual workbench without export
or comparison; late context is ignored. Context is not an authorization signal.

`src/core.mjs` constructs each REST path itself. Only `status,updated,duedate`
are requested. Jira must allow both the app scope and the current user's access.
At most five reads start per explicit action. Overlapping actions are rejected.
Each issue read has an eight-second timeout without retry; bridge cancellation
is not claimed, and an unsettled call keeps that in-memory instance busy.

The reference schema rejects unknown fields, duplicate keys, malformed dates,
extra issues and UTF-8 input larger than 64 KiB. Source mode and workspace
fingerprint must match before comparison reads. The SHA-256 digest detects
accidental changes, not a malicious rewrite, identity or valid provenance.
File metadata and device times are untrusted; fingerprints are not anonymization.

Imported contents are not displayed on import. Scope selection requires a
separate action. Successful rereads reveal only matching selected reference
fields. Denied, missing, rate-limited, invalid or timed-out reads produce a
slot-only unavailable row without keys, prior values or provider error bodies.
Removed reference issues are not included in the report. This view cannot
prevent someone from inspecting a file they already possess.

Signals use workflow category, a 48-hour freshness threshold and an explicit
UTC due-date convention. Future timestamps beyond five minutes give uncertainty.
Comparison separates field changes, time ageing and changed rule versions.
Clear signals apply only to the selected metadata; they do not establish
dependency completeness, acceptance or completed handoff.

`src/app.mjs` uses DOM text construction. It clears the previous report before a
new check or import and disables downloads after incomplete reads. Language
changes do not read Jira. State stays in memory; no browser or Forge storage is
used. Synthetic adapters and VM mocks exist only under `tests/`, outside the
runtime dependency graph.

The manifest declares one Jira issue panel and `read:jira-work`. It has no
function, resolver, scheduled job, write scope, KVS/SQL/LLM/container or remote
service. The bundled public SDK contains unused helpers; inclusion does not
mean invocation. The [official cost guide](https://developer.atlassian.com/platform/forge/optimise-forge-costs/)
describes direct frontend calls without a backend invocation. Zero listed
billable resource use is a design expectation, pending actual deployment and
cost review; the platform has no established hard $0 cap for this app.

Jira issue panels require permission to edit the current issue for visibility;
the app's read-only API scope does not broaden Jira permissions. Real permission,
iframe, accessibility and independent-installation checks remain pending.
