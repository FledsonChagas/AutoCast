# AutoCast v0.3 Route Selection Benchmark

This benchmark covers the structured route-selection eval suite in `evals/v0.3/route-selection.json`.

## Validation

Validated locally on 2026-09-09.

```bash
node bin/autocast.mjs eval --strict
npm run eval:strict
```

## Result

```txt
suite: AutoCast v0.3 Route Selection
total: 60
routeAccuracy: 100.00%
riskAccuracy: 100.00%
criticalEscalationRecall: 100.00%
securityEscalationRecall: 100.00%
failures: none
```

## Target Metrics

- Route accuracy: 90% or higher.
- Critical escalation recall: 95% or higher.
- Security escalation recall: 95% or higher.

## Scope

The eval suite covers 60 route-selection cases:

- low-risk `fast-lane` tasks
- normal `standard` tasks
- security-sensitive `secure-change` tasks
- critical `critical-change` tasks
- `review-only` tasks

## Notes

This benchmark measures the local route classifier. It does not claim model-level correctness or end-to-end software delivery quality.

The eval is intentionally transparent and should be expanded with real user traffic samples and adversarial cases before using the score as a public quality claim.
