# AutoCast Evaluation Methodology

AutoCast evaluation measures whether the framework standard improves AI-assisted development behavior.

Evaluation should not be confused with proof of universal correctness. Evals are calibration tools.

## What To Measure

| Dimension | Question |
|---|---|
| Route accuracy | Did AutoCast choose the correct route? |
| Security escalation recall | Did sensitive work escalate? |
| False-positive rate | Did low-risk work get over-escalated? |
| Judge quality | Did judges catch real blockers? |
| Evidence quality | Could another reviewer understand the result? |
| Adoption friction | Did the process slow down low-risk work unnecessarily? |

## Required Eval Types

## Route Evals

Inputs with expected route and risk level.

## False-Positive Evals

Low-risk or normal tasks that should not be escalated unnecessarily.

## False-Negative Evals

Sensitive tasks that must escalate to `secure-change` or `critical-change`.

## Judge Calibration

Cases where judges should approve, approve with remarks, or reject.

## With/Without AutoCast Benchmarks

Compare the same task with and without AutoCast:

- output quality
- test coverage
- security findings
- over-scope rate
- time to completion
- evidence completeness

## Minimum Reporting

Every benchmark report should include:

- date
- AutoCast version
- tool used
- model used when relevant
- eval set
- scoring method
- raw result
- limitations
- known sources of bias

## Anti-Overclaim Rule

Do not claim market-level proof from self-authored evals alone.

Self-authored evals are useful for regression protection and calibration. Public quality claims require external tasks, real-like usage, or independent review.
