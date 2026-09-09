# AutoCast v0.5 Conformance And Evaluation Report

Validated locally on 2026-09-09.

## Commands

```bash
npm run eval:strict
npm run eval:false-positive
npm run eval:false-negative
node --check bin/autocast.mjs
```

## Results

## Route Selection

```txt
suite: AutoCast v0.3 Route Selection
total: 60
routeAccuracy: 100.00%
riskAccuracy: 100.00%
criticalEscalationRecall: 100.00%
securityEscalationRecall: 100.00%
failures: none
```

## False-Positive Calibration

```txt
suite: AutoCast v0.5 False Positive Route Calibration
total: 10
routeAccuracy: 100.00%
riskAccuracy: 100.00%
criticalEscalationRecall: 100.00%
securityEscalationRecall: 100.00%
failures: none
```

## False-Negative Calibration

```txt
suite: AutoCast v0.5 False Negative Route Calibration
total: 10
routeAccuracy: 100.00%
riskAccuracy: 100.00%
criticalEscalationRecall: 100.00%
securityEscalationRecall: 100.00%
failures: none
```

## Scope

v0.5 improves conformance and evaluation as framework-standard artifacts. The CLI remains optional reference tooling.

## Limitations

- Evals are still self-authored calibration suites.
- Judge calibration remains human-scored in this milestone.
- Public claims require external or real-like benchmark tasks.
