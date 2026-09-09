# Workflow: Bugfix

## Route

Usually `standard`. Escalate when the bug touches sensitive paths.

## Steps

1. Define observed behavior.
2. Define expected behavior.
3. Reproduce or explain why reproduction is not feasible.
4. Identify likely root cause.
5. Add regression test when feasible.
6. Implement the smallest fix.
7. Verify the regression no longer occurs.
8. Run judge-correctness and judge-tests.
9. Run judge-security if sensitive.
10. Record root cause and evidence.

## Done When

- The bug is fixed.
- Regression evidence exists.
- No unrelated behavior changed.
