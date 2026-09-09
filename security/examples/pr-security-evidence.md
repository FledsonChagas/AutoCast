# PR Security Evidence Example

Use this shape when attaching AutoCast security evidence to a pull request.

```txt
route: critical-change
profile: critical
sensitive areas: authentication, token handling
trust boundary: unauthenticated user -> password reset flow
standards reviewed: OWASP access control, OWASP authentication, NIST SSDF PW/RV
tests: expired token rejected, reused token rejected, valid token accepted once
security judge: approved-with-remarks
blocking findings: none
residual risk: email delivery abuse requires rate limiting follow-up
human approval: required before release
```

## Required For Critical PRs

- route and profile
- sensitive areas
- trust boundary
- verification evidence
- judge verdict
- blocking findings
- residual risk
- release recommendation
