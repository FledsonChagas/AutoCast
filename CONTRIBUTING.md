# Contributing To AutoCast

AutoCast is a framework standard and methodology for AI-assisted software delivery.

Contributions should strengthen the standard without turning AutoCast into a mandatory runtime.

## Contribution Principles

- Preserve framework-first, tooling-second positioning.
- Keep CLI behavior optional unless explicitly marked as reference tooling.
- Do not overclaim eval or adoption results.
- Keep security secure-by-default.
- Keep docs bilingual when changing core standard material.
- Prefer small, reviewable changes.

## Good Contributions

- Clearer specification language.
- Better route examples.
- Better judge calibration cases.
- Security assurance improvements.
- Adapter reference improvements for OpenCode, Claude Code, or Cursor.
- Real adoption evidence with limitations disclosed.
- Evals that catch regressions or false positives.

## Pull Request Expectations

Every PR should state:

- route
- profile
- scope
- verification run
- security impact
- documentation impact
- whether bilingual docs are needed

## Required Checks

Run relevant checks before opening a PR:

```bash
npm run eval:strict
npm run eval:false-positive
npm run eval:false-negative
npm run eval:security-assurance
npm run eval:adapter-conformance
npm run eval:adoption-evidence
npm run eval:canonical-layout
node --check bin/autocast.mjs
```

## Anti-Overclaim Policy

Do not describe samples as proof.

Use the evidence labels from `ADOPTION_EVIDENCE.md`:

- `sample`
- `pilot`
- `benchmark`
- `independent`
