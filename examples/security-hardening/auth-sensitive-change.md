# Example: Auth-Sensitive Change

## Raw Request

Add password reset to the application.

## Intake Result

- task type: feature
- security impact: authentication, token handling, email flow, account takeover risk
- risk: critical
- route: critical-change

## Task Brief

Implement password reset with secure token generation, short token lifetime, one-time use, safe error messages, and server-side validation.

## Verification Plan

- Request reset for existing account.
- Avoid account enumeration in visible response.
- Reject expired token.
- Reject reused token.
- Accept valid token once.
- Confirm password is stored according to project hashing standards.

## Required Judges

- planner
- builder
- reviewer
- judge-correctness
- judge-tests
- judge-security
- human approval before release

## Done Criteria

- Threat model completed.
- Positive and negative tests pass.
- Security judge approves.
- Residual risk recorded.
