# AutoCast v0.7 Adapter Conformance Report

Validated locally on 2026-09-09.

## Scope

v0.7 strengthens official adapters as part of the AutoCast framework standard.

## Commands

```bash
npm run eval:strict
npm run eval:false-positive
npm run eval:false-negative
npm run eval:security-assurance
node bin/autocast.mjs eval evals/v0.7/adapter-conformance.json --strict
node --check bin/autocast.mjs
```

## Expected Result

All calibration suites should pass.

## Result

```txt
suite: AutoCast v0.7 Adapter Conformance Route Calibration
total: 5
routeAccuracy: 100.00%
riskAccuracy: 100.00%
criticalEscalationRecall: 100.00%
securityEscalationRecall: 100.00%
failures: none
```

## Limitations

- Adapter conformance is currently documented and calibrated, not fully enforced by tool-native mechanics.
- OpenCode is currently the strongest adapter surface because it supports project agents with permissions.
- Cursor is the lightest adapter surface because rules guide behavior but do not enforce permissions.
