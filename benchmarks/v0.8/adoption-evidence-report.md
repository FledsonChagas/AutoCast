# AutoCast v0.8 Adoption Evidence Report

Validated locally on 2026-09-09.

## Scope

v0.8 adds adoption evidence methodology, pilot guidance, metrics, case study templates, and realistic sample case studies.

## Commands

```bash
npm run eval:strict
npm run eval:false-positive
npm run eval:false-negative
npm run eval:security-assurance
npm run eval:adapter-conformance
node bin/autocast.mjs eval evals/v0.8/adoption-evidence.json --strict
node --check bin/autocast.mjs
```

## Expected Result

All calibration suites should pass.

## Result

```txt
suite: AutoCast v0.8 Adoption Evidence Route Calibration
total: 5
routeAccuracy: 100.00%
riskAccuracy: 100.00%
criticalEscalationRecall: 100.00%
securityEscalationRecall: 100.00%
failures: none
```

## Limitations

- Sample case studies are illustrative, not external adoption proof.
- Public claims still require real pilots, raw results, or independent review.
