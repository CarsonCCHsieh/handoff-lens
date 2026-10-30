# Reviewer walkthrough and verification status

The app was registered once. Development 2.1.0 was deployed and tested in Jira;
Forge lint reported **No issues**. Production 2.0.0 was deployed and installed
on the owner's Jira test site, where the production checks below were observed.
Production 2.3.0 passed a fresh single-issue read and focused same-page guide and
third-party notice checks, with the application JavaScript, CSP and API behavior
unchanged. These are observed checks, not acceptance of every scenario or a
full repeat of the earlier comparison checks on 2.3.0.

Devpost registration is complete and the Handoff Lens draft is at 3/5; it has not
been Submitted. Source repository: [Handoff Lens on GitHub](https://github.com/CarsonCCHsieh/handoff-lens).
The independent judge installation-sharing link is pending.
Preserve the registered manifest ID.

Judges should install the app on a Jira site they administer and are authorized
to use, using the sharing link when available. The owner's installation does
not provide access to that site. Use authored demonstration records in the
judge's own environment. The host issue must be browsable and editable for the
Handoff Lens button to appear; selected issues also require the current user's
browse and issue-security access. Open the host issue and choose **Handoff Lens**.

1. Select one to five issue keys and choose **Check selected issues**. Confirm
   the panel shows current status category, updated time and due date without
   issue titles or people. Reads require this explicit action.
2. Switch English → 繁體中文 → 日本語. The prior read timestamp should remain
   unchanged. Download the current snapshot and keep it outside public source.
3. To compare a reference, expand **Or paste reference JSON**, paste
   the exported JSON and choose **Import pasted JSON**. Choose **Use reference
   scope**, then **Check selected issues**. Change only authored demo metadata
   in Jira and check again to observe field drift separately from ageing.
   Jira may remount the panel after a host-page change, clearing its in-memory
   reference, scope and results. If that happens, reimport the saved reference
   and choose its scope before checking again.
4. For a separately arranged denied/revoked-access test, keep the host issue
   editable while restricting another selected issue. A failed result must hide
   its key and prior reference fields and disable export. User-entered keys can
   remain in the input; **Use reference scope** clears that input. Do not use
   restricted real records for this demonstration.

| Check | Completed evidence / remaining limit |
| --- | --- |
| Local core behavior | 16 synthetic tests passed. |
| Public SDK and built UI | SDK probe and two synthetic minimal-DOM/bridge probes passed, including paste validation, checksum/tenant rejection and missing-context behavior. These are not browser or Jira permission tests. |
| Registration, development deployment/install | Completed once; development 2.1.0 deployed and lint reported No issues. |
| Production deployment/install | Production 2.0.0 deployed and installed on the owner's Jira test site. Production 2.3.0 deployed the same-page resource fix and passed a fresh single-issue read; the application JavaScript, CSP and API behavior were unchanged by this fix. Environment version numbers alone do not establish parity. |
| Real Jira context and allowed reads | Development checks covered current-issue prefill and single/five-issue reads. Production 2.0.0 read five authored demo issues; production 2.1.0 and 2.3.0 passed fresh single-issue reads. Result count is not an independent HTTP trace. |
| Duplicate/six-key rejection | Observed in the real development installation. |
| English / 繁體中文 / 日本語 | Production switching preserved the same comparison read timestamp. |
| JSON download | Production five-issue export was downloaded and verified on disk. Earlier development single/five-issue downloads were also verified. |
| Paste import and reference comparison | Production reread the same five-issue reference as unchanged. Changing one authored issue from Done to In Progress did not automatically refresh the prior report. Jira then remounted the panel, clearing its reference and results; reimporting the same saved reference and explicitly checking detected statusCategory and updated drift, with four unchanged issues. |
| Invalid reference | Development checks rejected an altered checksum and a valid-checksum reference for a different workspace, clearing old results/export. |
| Missing-issue sanitation and Clear | Production reread of a nonexistent reference issue showed only Item 1 / unavailable / not found or not visible, withholding its key and prior values and disabling download. Clear removed the reference, scope and results and kept export disabled. This does not establish real 403 or revocation behavior. |
| Same-page guide and notices | Production 2.3.0 displayed the complete three-language guide and third-party notices in native expandable sections without document navigation. Enter collapsed the guide and toggled notices; Chinese/Japanese summaries and guide remained usable. The report and original read timestamp were preserved throughout. These were focused resource checks. |
| Resource build guards | Local build/static verification and SDK plus two synthetic bundle probes passed. Static guards reject internal document navigation and check synchronized inline/generated license notices, normalizing line endings. These are not browser permission tests. |
| Native file chooser/import | Automation's chooser wait timed out before file selection. Real import remains unverified; this does not establish an application defect. |
| Denied/revoked access, 403 and 429 | Synthetic coverage only; not verified against real Jira. |
| Full keyboard/accessibility, narrow layouts, independent user visibility | Pending real verification. |
| Recorded usage/cost readback | The post-development dashboard showed zero displayed resource usage, $0 additional usage charges and a $0 forecast. Data may lag by up to one hour; this is not a hard spending cap or production charge guarantee. |
| Independent reviewer installation | Pending; no judge sharing link is available yet. |
| Source repository | [Handoff Lens on GitHub](https://github.com/CarsonCCHsieh/handoff-lens). |
| Demonstration video | [Public 154-second video](https://youtu.be/5hZAqvJnOSI), using edited still frames of actual screens, authored synthetic Jira data and offline text-to-speech narration. It describes missing-item, Clear and remount behavior and verification limits. |
| Devpost registration and submission | Registered; details saved and draft at 3/5, not Submitted. |

Completed observations do not imply every scenario has been repeated against
the latest deployment. Before submission, resolve remaining production checks,
provide and test an independent reviewer installation route, and
finish the remaining submission fields. Continue reviewing usage and describe remaining
test coverage accurately. Do not present synthetic checks as platform evidence.

Local checks are documented in [README.md](README.md). Runtime data and cost
boundaries are described in [ARCHITECTURE.md](ARCHITECTURE.md).
