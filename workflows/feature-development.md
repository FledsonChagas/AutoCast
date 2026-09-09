# Workflow: Feature Development

## Route

Usually `standard`. Escalate to `secure-change` or `critical-change` when sensitive.

## Steps

1. Complete intake.
2. Fill task brief.
3. Planner decomposes scope if more than one step.
4. Builder implements the smallest correct change.
5. Builder runs relevant tests or checks.
6. Judge correctness.
7. Judge tests.
8. Judge security if sensitive.
9. Fix blocking findings.
10. Record evidence and residual risk.

## Done When

- Acceptance criteria are met.
- Required verification passed or skipped with reason.
- Required judges approved.
- Security baseline is satisfied.
