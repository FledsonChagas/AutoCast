# Sample Case Study: Small Team Auth Hardening

## Evidence Label

sample

## Project Type

Small web application.

## User Profile

small team

## Tool

Claude Code

## AutoCast Profile

critical

## Task

Add rate limiting to password reset.

## Baseline Behavior

Not measured. This sample is illustrative.

## AutoCast Behavior

AutoCast routes the task as `critical-change`, requires a threat model, security judge, positive and negative tests, and human approval before release.

## Route

critical-change

## Evidence

- password reset is authentication-sensitive
- abuse case: repeated reset requests against a target account
- expected tests: rate limit applies, legitimate reset still works, error does not expose account status
- residual risk recorded

## Judge Findings

Security judge should reject if no abuse-path test exists or if account enumeration is introduced.

## Security Findings

Critical route required because the task touches authentication and account takeover risk.

## Metrics

- time-to-brief: under 8 minutes target
- time-to-completion: not measured
- over-scope: should be zero
- verification completeness: positive and negative tests required
- adoption friction: acceptable due to critical risk

## Limitations

Illustrative sample only. Not external evidence.

## Recommendation

Use AutoCast `critical` for authentication and account recovery changes.
