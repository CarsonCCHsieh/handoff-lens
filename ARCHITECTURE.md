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

File and pasted-JSON imports use the same validator. Pasted text is visible
while entered, then cleared by Import or Clear; validation starts no Jira read.
An import discards the previous reference and report before parsing, including
when validation fails. Imported contents are not displayed on import. Scope
selection requires a separate action. Successful rereads reveal only matching selected reference
fields. Denied, missing, rate-limited, invalid or timed-out reads produce a
slot-only unavailable row without keys, prior values or provider error bodies.
Removed reference issues are not included in the report. A manually entered
key may remain in the input; choosing the imported scope clears that input.
This view cannot prevent someone from inspecting a file they already possess.

Signals use workflow category, a 48-hour freshness threshold and an explicit
UTC due-date convention. Future timestamps beyond five minutes give uncertainty.
Comparison separates field changes, time ageing and changed rule versions.
Clear signals apply only to the selected metadata; they do not establish
dependency completeness, acceptance or completed handoff.

`src/app.mjs` uses DOM text construction. It clears the previous report before a
new check or import and disables downloads after incomplete reads. Language
changes do not read Jira. State stays in memory; no browser or Forge storage is
used. A Jira host-page change can remount the panel and discard its reference,
scope and results. Continuing a comparison then requires reimporting the saved
reference, selecting its scope and explicitly checking again. Synthetic
adapters and VM mocks exist only under `tests/`, outside the
runtime dependency graph.

The three-language guide and third-party notices use native expandable
sections in the same document. The brand does not navigate to another page.
Static verification rejects internal document navigation and checks inline
and generated license-notice synchronization, normalizing line endings.

The manifest declares one Jira issue panel and `read:jira-work`. It has no
function, resolver, scheduled job, write scope, KVS/SQL/LLM/container or remote
service. The bundled public SDK contains unused helpers; inclusion does not
mean invocation. The [official cost guide](https://developer.atlassian.com/platform/forge/optimise-forge-costs/)
describes direct frontend calls without a backend invocation. Zero listed
billable resource use is a design expectation. The October 30, 2026
post-production dashboard readback, after sharing was enabled, showed zero
displayed resource usage, $0 additional usage charges and a $0 forecast. Data
may lag by up to one hour; displayed charges exclude taxes and applicable
discounts. This observation is not a hard $0 cap or a guarantee of future
charges; actual usage still needs review as the app is used.

Jira issue panels require permission to edit the current issue for visibility;
the app's read-only API scope does not broaden Jira permissions. Context,
allowed single/five-issue reads, language switching, JSON downloads, pasted
reference comparison and explicit-refresh drift have been observed in the real
development 2.1.0 installation. Development checks also covered
checksum/workspace rejection. Production 2.0.0 checks on the owner's Jira test
site observed five reads, a verified downloaded snapshot, pasted-reference
comparison, status-category/updated-time drift after an explicit reread,
unchanged read timestamps across languages, missing-issue sanitation and Clear.
The drift check reimported the same saved reference after Jira remounted the
panel and cleared its in-memory state. Production 2.3.0 passed a fresh
single-issue read and focused checks of the same-document guide and notices.
Their expansion, keyboard toggling and three-language presentation preserved
the same report and read timestamp. This resource fix changed index/style
content without changing the application JavaScript, CSP or API behavior.
These are production checks observed, not blanket scenario acceptance or a
full rerun of the earlier scenarios on 2.3.0.
Native file import, denied/revoked/429 reads, full
accessibility and independent reviewer installation remain unverified; see
`JUDGING.md`.

[Handoff Lens is Submitted to Codegeist 2026](https://devpost.com/software/handoff-lens),
with 5/5 steps complete. The submission includes a cover and five safe-cropped
actual-production gallery images. The [source repository is public](https://github.com/CarsonCCHsieh/handoff-lens).
[The public demonstration](https://youtu.be/hV3Ok2VYKKM) uses edited still frames
of actual screens with authored synthetic data and offline text-to-speech;
its duration is 154 seconds.
Jira sharing is enabled and the installation link is provided in the judge
submission. The installer showed the approved owner alias and read permission;
Get app opened the site chooser, which was cancelled. This verifies the route
in the owner session, not installation by a separate user. Any holder of the
link may install on a Jira site they administer. Independent judges should
use a site they are authorized to use; the host issue must be browsable and
editable, and the app's read-only scope grants no additional Jira access.
