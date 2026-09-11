# AutoCast v0.10 Canonical Layout Report

Validated locally on 2026-09-09.

## Scope

v0.10 formalizes the canonical `.autocast/` project layout:

```txt
.autocast/core/ = AutoCast framework
.autocast/*     = project-specific AutoCast state
```

## Commands

```bash
npm run eval:strict
npm run eval:false-positive
npm run eval:false-negative
npm run eval:security-assurance
npm run eval:adapter-conformance
npm run eval:adoption-evidence
npm run eval:canonical-layout
node --check bin/autocast.mjs
node bin/autocast.mjs init
```

## Expected Result

All calibration suites should pass.

## Result

```txt
suite: AutoCast v0.10 Canonical Layout Route Calibration
total: 5
routeAccuracy: 100.00%
riskAccuracy: 100.00%
criticalEscalationRecall: 100.00%
securityEscalationRecall: 100.00%
failures: none
```

## Init Smoke Test

`node bin/autocast.mjs init` was executed in a clean temporary directory and created the project-owned `.autocast/` layout without requiring the framework to be copied into project state.

## Limitations

- The layout is a framework standard, not a mandatory installer.
- `.autocast/core/` may be a submodule or clone.
- Project teams decide which evidence is safe to commit.
