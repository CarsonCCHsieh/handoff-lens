# Handoff Lens

Check a small Jira handoff before passing it to the next person. Select one to
five issue keys, read their current status category, updated time and due date,
then compare them with a reference JSON file you explicitly import. English,
繁體中文 and 日本語 are included.

**Current state: local build, not registered, deployed, installed or submitted.**
The all-zero app ID in `manifest.yml` is a placeholder. Real Jira permissions,
Forge iframe behavior, file import/download and judge installation still need
verification. This repository does not contain an installation link yet.

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
bounded requests and metadata timeout behavior, not real browser rendering or
Jira authorization. Generated logs and probe results stay under ignored `.local/`.

## Runtime and data

The app uses the supported public `@forge/bridge` entry point. It calls
`view.getContext()` once, with an eight-second timeout, then waits for an
explicit check before reading Jira. Each check makes at most five fixed GET
requests through the current user's permissions. There are no automatic issue
refreshes, retries, writes, backend functions, storage, LLM calls or remote
services. Missing workspace context allows fresh checks but disables reference
comparison and export.

State stays in page memory. Exported files contain selected issue keys and
metadata, capture/rule information and a workspace fingerprint; they can still
be sensitive. A checksum detects content mismatch, not authorship or approval.
Unavailable issues hide their prior fields in the report. This does not revoke
a file someone already downloaded. See [ARCHITECTURE.md](ARCHITECTURE.md).

## Real Forge installation

The project owner must finish scoped CLI authentication and register this app
once before deployment. Keep tokens outside the repository and shell history.
Do not rerun registration on an existing deployment merely to update code.

After those account steps, the intended commands are:

```sh
forge register "Handoff Lens"
forge lint
forge deploy --environment development
forge install --site YOUR_SITE.atlassian.net --product jira --environment development
```

The last three require the real app ID written by registration. Registration,
deployment and installation contact Atlassian; none were performed for this
repository preparation. Review the `read:jira-work` consent at installation.
Do not add payment details, accept a paid plan or add billable capabilities as
part of this workflow. Browser Custom UI/direct REST reads are designed to
avoid function invocations, but actual deployed usage has not been checked;
absence of a card is not a spending cap.

[JUDGING.md](JUDGING.md) records the pending real-user walkthrough and acceptance
checks. The project is MIT licensed; bundled components retain the notices in
`licenses/` and `forge-build/THIRD_PARTY_NOTICES.txt`.

Primary references: [Custom UI](https://developer.atlassian.com/platform/forge/extend-ui-with-custom-options/),
[requestJira](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/requestJira/),
[view](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/view/),
[register](https://developer.atlassian.com/platform/forge/cli-reference/register/),
[deploy](https://developer.atlassian.com/platform/forge/cli-reference/deploy/),
[install](https://developer.atlassian.com/platform/forge/cli-reference/install/),
[cost guidance](https://developer.atlassian.com/platform/forge/optimise-forge-costs/).
