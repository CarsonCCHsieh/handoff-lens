# Handoff Lens

Check a small Jira handoff before passing it to the next person. Select one to
five issue keys, read their current status category, updated time and due date,
then compare them with reference JSON you explicitly import by file or paste. English,
繁體中文 and 日本語 are included.

**Current state: production checks have been observed on the owner's Jira
test site, and production 2.3.0 has been deployed.** Devpost
registration is complete and the Handoff Lens draft is at 3/5; it has not been
Submitted. Source repository: [Handoff Lens on GitHub](https://github.com/CarsonCCHsieh/handoff-lens).
There is no independent reviewer sharing link yet.

Production 2.0.0 checks read five authored demonstration issues, downloaded a
snapshot confirmed on disk, and reread that pasted reference as unchanged.
After an authored issue changed from Done to In Progress, a new explicit check
detected status-category and updated-time drift while the other four remained
unchanged. Language switching preserved that read timestamp. A nonexistent
reference issue withheld its key and prior values and disabled download;
Clear removed the reference, scope and results. Production 2.3.0 passed a fresh
single-issue read and focused checks of the same-page three-language guide and
third-party notices. Expanding and collapsing these sections, including with
Enter, and switching languages preserved the report and its read timestamp.
The application JavaScript, CSP and Jira API behavior were unchanged by this
resource fix; the earlier comparison scenarios were not all repeated on 2.3.0.

[Watch the 154-second demonstration](https://youtu.be/5hZAqvJnOSI). It uses edited
still frames of actual screens with authored synthetic data and offline
text-to-speech narration, and describes the remount and verification limits.

Earlier development checks also covered duplicate/six-key input rejection and
checksum/workspace rejection. [JUDGING.md](JUDGING.md) separates production
observations, development evidence, synthetic tests and unverified scenarios.
These observations are not blanket acceptance of every scenario. Preserve the
registered app ID already in `manifest.yml`.

## Build and test locally

Use Node 24.22.2 (`.nvmrc`) and npm. The runtime SDK and build tool are pinned in
`package-lock.json`. Dependency installation downloads public npm packages;
lifecycle scripts are disabled in the command below.

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run build
npm test
npm run verify:local
npm run test:bundle
```

`npm run build` runs local esbuild and creates the six files in `forge-build/`.
It does not invoke Forge CLI. A localhost page cannot provide the real Forge
host bridge; opening the built page alone is not a working Jira installation.
`forge build` is a different command that uploads code to Atlassian.

The 16 core tests use authored synthetic metadata. The SDK initialization
probe and two bundle probes use a minimal synthetic DOM/bridge; they check
bounded requests, metadata timeout and reference-import guards, not real browser
rendering or Jira authorization. Generated logs and probe results stay under
ignored `.local/`.

## Runtime and data

The app uses the supported public `@forge/bridge` entry point. It calls
`view.getContext()` once, with an eight-second timeout, then waits for an
explicit check before reading Jira. Each check makes at most five fixed GET
requests through the current user's permissions. There are no automatic issue
refreshes, retries, writes, backend functions, storage, LLM calls or remote
services. Missing workspace context allows fresh checks but disables reference
comparison and export.

State stays in page memory. Jira can remount the panel after a host-page change,
discarding its reference, scope and results; reimport a saved reference to
continue that comparison. Exported files contain selected issue keys and
metadata, capture/rule information and a workspace fingerprint; they can still
be sensitive. A checksum detects content mismatch, not authorship or approval.
Unavailable issues hide their prior fields in the report. This does not revoke
a file someone already downloaded. See [ARCHITECTURE.md](ARCHITECTURE.md).

## Review in Jira

Independent reviewers should install the app on a Jira site they administer
and are authorized to use. The judge installation-sharing link is pending;
the owner's existing installation does not grant reviewers site access.
After installation, open an authored demonstration issue you can browse and
edit, choose **Handoff Lens**, enter one to five issue keys and choose
**Check selected issues**. The current user also needs access to each selected
issue. Switch languages or download the current snapshot. Treat downloads as
private Jira data.

To compare a reference, expand **Or paste reference JSON**, paste
an exported snapshot and choose **Import pasted JSON**. Then choose **Use
reference scope** and **Check selected issues**. File import remains available.
Import alone starts no Jira reads. The app does not refresh after a Jira change;
use another explicit check. If Jira remounts the panel, reimport the reference
and select its scope first. Native file import remains unverified because the
automation's file-chooser wait timed out before selection.

## Owner deployment updates

Scoped CLI authentication, app registration, development deployment and the
production deployment/own-site installation have already been completed.
Keep tokens outside the repository and shell history.
Do not register another app to update this one. With authorized Forge CLI access:

```sh
npm run build
forge lint
forge deploy --environment production
```

Choose the intended environment explicitly for each update; development and
production versions are separate deployment records. A normal code update does
not require a second registration. Production sharing and an independent judge
installation remain separate work. Review the `read:jira-work` consent for any new install.
Do not add payment details, accept a paid plan or add billable capabilities.
Browser Custom UI/direct REST reads are designed to avoid function invocations;
the recorded post-development dashboard showed zero displayed resource usage,
$0 additional usage charges and a $0 forecast. That readback can lag by up to
one hour and does not establish a hard spending cap or guarantee production
charges. Continue reviewing actual usage; absence of a card is not a cap.

[JUDGING.md](JUDGING.md) records completed and pending acceptance checks. The
project is MIT licensed; bundled components retain the notices in
`licenses/` and `forge-build/THIRD_PARTY_NOTICES.txt`.
See [PRIVACY.md](PRIVACY.md) for data handling and [SUPPORT.md](SUPPORT.md) for
reporting an issue without posting restricted data. [TERMS.md](TERMS.md)
describes use of this free hackathon build.

Primary references: [Custom UI](https://developer.atlassian.com/platform/forge/extend-ui-with-custom-options/),
[requestJira](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/requestJira/),
[view](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/view/),
[register](https://developer.atlassian.com/platform/forge/cli-reference/register/),
[deploy](https://developer.atlassian.com/platform/forge/cli-reference/deploy/),
[install](https://developer.atlassian.com/platform/forge/cli-reference/install/),
[cost guidance](https://developer.atlassian.com/platform/forge/optimise-forge-costs/).
