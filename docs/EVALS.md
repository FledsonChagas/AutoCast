# AutoCast Evals

AutoCast evals measure whether the harness chooses the right route, escalates sensitive work, and avoids unnecessary friction.

## v0.3 Eval Format

Structured evals live in:

- `evals/v0.3/route-selection.json`
- `evals/v0.5/false-positive.json`
- `evals/v0.5/false-negative.json`
- `evals/v0.6/security-assurance.json`
- `evals/v0.7/adapter-conformance.json`
- `evals/v0.8/adoption-evidence.json`

Schema:

```txt
schemas/eval-suite.schema.json
```

Each case includes:

- `id`
- `input`
- `expectedRoute`
- `expectedRisk`
- `reason`

## Metrics

- Route accuracy.
- Risk accuracy.
- Critical escalation recall.
- Security escalation recall.
- Failure list for calibration.

## Targets

- Route accuracy: 90% or higher.
- Critical escalation recall: 95% or higher.
- Security escalation recall: 95% or higher.

## Running

```bash
node bin/autocast.mjs eval --strict
npm run eval:strict
npm run eval:false-positive
npm run eval:false-negative
npm run eval:security-assurance
npm run eval:adapter-conformance
npm run eval:adoption-evidence
```

## Interpretation

A passing eval does not prove AutoCast is universally correct. It proves that a specific route-selection policy behaves correctly against a known calibration set.

Use failures to improve intake, router rules, and documentation.
