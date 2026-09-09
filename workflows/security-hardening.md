# Workflow: Security Hardening

## Route

Use `secure-change` or `critical-change`.

## Steps

1. Define asset, threat, and trust boundary.
2. Complete `templates/security-threat-model.md` when risk is high or critical.
3. Identify applicable OWASP, NIST SSDF, CIS, and DevSecOps controls.
4. Implement the smallest hardening change.
5. Add positive and negative verification.
6. Run judge-security.
7. Run judge-correctness and judge-tests.
8. Record residual risk.

## Done When

- No high or critical finding remains.
- Controls are documented.
- Verification proves the mitigation.
