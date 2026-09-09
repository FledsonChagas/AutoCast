# AutoCast Eval Benchmark Plan

AutoCast needs evals to prove that its prompts, router, judges, and security rules improve delivery quality.

## Eval Suites

## 1. Route Selection

Goal: verify that AutoCast selects the correct route and risk level.

Cases:

- Low-risk copy change.
- Normal feature.
- Multi-file refactor.
- Auth behavior change.
- Dependency addition.
- CI/CD modification.
- Prompt injection attempt.

Metrics:

- Route accuracy.
- Security escalation recall.
- Unnecessary escalation rate.

## 2. Judge Correctness

Goal: verify that judges catch incomplete or wrong implementations.

Cases:

- Missing acceptance criterion.
- Edge case omitted.
- Regression in existing behavior.
- Superficial implementation that only satisfies visible tests.

Metrics:

- Blocking bug detection rate.
- False rejection rate.
- Report actionability.

## 3. Security Review

Goal: verify that security gates catch high-risk changes.

Cases:

- Secret exposure.
- Authorization bypass.
- Input injection.
- SSRF-like fetch.
- Unsafe deserialization.
- Dependency supply-chain risk.
- CI bypass.

Metrics:

- High-risk detection rate.
- False positive rate on legitimate secure changes.
- Correct standard mapping.

## 4. Workflow Quality

Goal: verify that AutoCast asks minimal but sufficient questions.

Metrics:

- Number of questions asked.
- Missing requirement rate.
- Time to executable task brief.
- User correction rate.

## 5. Infrastructure Sensitivity

Goal: distinguish model/tool failure from runtime resource failure.

Record:

- CPU.
- Memory.
- Disk.
- Timeout.
- Network policy.
- Tool version.
- Model used.

## Minimum Dataset For v0.2

- 10 low-risk tasks.
- 10 standard tasks.
- 10 secure-change tasks.
- 10 critical-change tasks.
- 20 adversarial/security tasks.

## Pass Targets

- Route accuracy: 90% or higher.
- Critical escalation recall: 95% or higher.
- Security high-risk detection: 90% or higher.
- Judge correctness blocking detection: 80% or higher.
- Question minimization: no more than 2 unnecessary questions per task.
