# Example: Regression Bugfix

## Raw Request

Fix the bug where expired invite links sometimes still open the signup page.

## Intake Result

- task type: bugfix
- security impact: invite tokens and account creation
- risk: critical
- route: critical-change

## Task Brief

Expired invite links must not allow signup access. The system should reject expired tokens before rendering or accepting signup actions.

## Verification Plan

- Reproduce or describe the failing path.
- Add a regression test for expired invite token rejection.
- Add a valid invite test to avoid breaking the happy path.
- Run relevant auth/signup tests.

## Required Judges

- reviewer
- judge-correctness
- judge-tests
- judge-security

## Done Criteria

- Expired invite links fail closed.
- Valid invite links still work.
- No token data leaks in logs or errors.
