# Adapter Profile: critical

Use for auth, authorization, payments, production data, CI/CD, infrastructure, cryptography, and compliance.

## Required

- Everything in `secure`.
- Critical-change threat model.
- Human approval before release.
- Negative tests for abuse and failure paths.
- Security evidence report.

## Tool Behavior

- Block secret exposure.
- Block unreviewed security-control bypass.
- Do not rely on AI confidence alone.
