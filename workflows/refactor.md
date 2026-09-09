# Workflow: Refactor

## Route

Use `standard` for local refactors and `critical-change` for wide architectural or security-sensitive refactors.

## Steps

1. State behavior that must remain unchanged.
2. Identify the smallest safe refactor boundary.
3. Verify baseline tests if feasible.
4. Refactor without changing behavior.
5. Run tests or targeted checks.
6. Judge correctness with focus on regressions.
7. Judge tests if coverage changed.
8. Record any changed tradeoff.

## Done When

- Behavior is preserved.
- The code is simpler or safer.
- No unrelated changes were introduced.
