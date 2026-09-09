# AutoCast Security Baseline

This baseline applies to every AutoCast workflow.

## Required Controls

- Never commit secrets, tokens, private keys, credentials, session cookies, or production data.
- Validate and normalize untrusted input at trust boundaries.
- Enforce authorization server-side for protected actions.
- Use least privilege for files, APIs, databases, services, CI/CD, and cloud roles.
- Prefer safe defaults and deny-by-default behavior.
- Avoid logging secrets, tokens, PII, credentials, or full request payloads by default.
- Avoid shell command construction from untrusted input.
- Avoid unsafe deserialization.
- Avoid direct path usage from untrusted input without canonicalization and allowlists.
- Pin or justify new dependencies.
- Record security assumptions and residual risk.
- Classify risky actions before execution when the tool supports permission gating.
- Prefer sandboxed execution for shell commands, dependency installation, migrations, and untrusted code.

## Blocking Conditions

Block completion when:

- A secret is exposed.
- A high or critical vulnerability is introduced.
- Authorization is weakened without explicit approval.
- Sensitive data is logged or returned to unauthorized users.
- CI/CD, deployment, or infra permissions are widened without review.
- Dependency risk is unknown for a critical path.
- A risky action bypasses the permissions classifier or required human approval.
