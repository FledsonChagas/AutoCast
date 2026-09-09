# Critical Change Threat Model Pack

Use this pack for `critical-change` work.

## Critical Areas

- authentication
- authorization
- permissions
- payments or billing
- production data
- personal or regulated data
- CI/CD
- infrastructure
- cryptography
- compliance

## Required Questions

1. What asset is protected?
2. Who can access or influence the asset?
3. What trust boundary changes?
4. What abuse case becomes possible?
5. What failure mode is most damaging?
6. What control prevents the abuse case?
7. What evidence proves the control works?
8. What residual risk remains?

## Required Output

- asset
- actor
- trust boundary
- abuse case
- control
- verification
- judge verdict
- residual risk
- human approval status

## Release Rule

Critical changes do not release on AI confidence alone.

They require evidence, security judge review, and explicit human approval.
