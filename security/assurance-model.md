# Security Assurance Model

AutoCast aims for secure-by-default development, not a false guarantee of perfect security.

## Assurance Layers

- Intake classifies security impact before execution.
- Router escalates sensitive changes to stricter workflows.
- Builder follows least privilege and secure defaults.
- Security judge reviews every sensitive change.
- OWASP, NIST SSDF, CIS, and DevSecOps checklists provide control coverage.
- Evidence is recorded for tests, checks, assumptions, and residual risks.

## What AutoCast Can Enforce

- No known secrets in committed changes.
- No unreviewed permission widening.
- No high or critical security finding left unresolved.
- No sensitive change completed without security classification.
- No dependency or supply-chain change without review.

## What Still Needs Human Ownership

- Business risk acceptance.
- Production release approval.
- Compliance interpretation.
- Penetration testing for critical systems.
- Incident response decisions.
