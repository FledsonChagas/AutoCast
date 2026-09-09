# Security Policy

AutoCast is designed for secure AI-assisted software delivery.

## Security Philosophy

AutoCast does not claim perfect security. It reduces risk through layered controls:

- Minimum intake before execution.
- Risk-based workflow routing.
- Pre-execution permission classification for dangerous actions.
- Secure development gates aligned with OWASP, NIST SSDF, CIS Controls, and DevSecOps.
- Independent security judges.
- Evidence and residual-risk records.

AutoCast is secure by default. Users choose the rigor profile, not whether security exists.

Profiles are defined in `PROFILES.md` and `PROFILES.pt-BR.md`:

- `minimal`
- `standard`
- `secure`
- `critical`

## Sensitive Areas

Always escalate to `critical-change` when work touches:

- Authentication.
- Authorization.
- Permissions.
- Secrets.
- Tokens.
- Payments or billing.
- Production data.
- Personal or regulated data.
- Infrastructure.
- CI/CD.
- Cryptography.
- Dependency or supply-chain execution.

## Blocking Conditions

AutoCast should block completion when:

- A secret is exposed.
- Authorization is weakened without explicit approval.
- Sensitive data can leak.
- A dependency or build-chain risk is unknown in a critical path.
- A high or critical vulnerability is introduced.
- A security control, test, scanner, hook, or CI gate is bypassed.

## Reporting Vulnerabilities

This repository does not yet define a public vulnerability reporting channel.

Before public release, configure GitHub private vulnerability reporting or add a dedicated security contact.
