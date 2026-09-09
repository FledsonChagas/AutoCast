# AutoCast Decision Matrix

Use this matrix after intake.

## Route: review-only

Use when the user asks for review, diagnosis, comparison, brainstorming, or planning without implementation.

Required agents:

- reviewer or planner
- judge-security if security-sensitive

## Route: fast-lane

Use when all are true:

- Local, low-risk change.
- No auth, permissions, secrets, personal data, infra, CI/CD, or production data.
- Clear expected result.
- Verification is simple.

Required agents:

- builder
- judge-correctness

## Route: standard

Use for normal feature, bugfix, refactor, or test generation.

Required agents:

- planner when scope has more than one step
- builder
- judge-correctness
- judge-tests

## Route: secure-change

Use when the work touches security-sensitive behavior, dependencies, external input, authorization, secrets, personal data, or integrations.

Required agents:

- planner
- builder
- judge-correctness
- judge-tests
- judge-security

## Route: critical-change

Use when the work touches authentication, authorization, payments, cryptography, production data, infra, CI/CD, compliance, or high-impact business logic.

Required agents:

- planner
- builder
- reviewer
- judge-correctness
- judge-tests
- judge-security
- human approval before release

## Escalation Rules

Escalate one level when:

- Scope is unclear.
- Tests are missing and behavior is important.
- The change adds a dependency.
- The change widens permissions.
- The change crosses a trust boundary.
- The model must modify generated code, migrations, infra, or release configuration.
