# OWASP Checklist

Use this checklist for web, API, mobile, and service changes.

## Access Control

- Authorization is enforced on the server side.
- Object-level access checks exist where IDs are user-controlled.
- Default behavior denies access.

## Cryptographic Failures

- No custom cryptography unless explicitly required and reviewed.
- Secrets are not hardcoded.
- Sensitive data is protected in transit and at rest according to project requirements.

## Injection

- SQL, NoSQL, OS command, LDAP, template, and expression inputs are parameterized or safely encoded.
- No shell command uses untrusted concatenated input.

## Insecure Design

- Threat model exists for sensitive changes.
- Abuse cases are considered.

## Security Misconfiguration

- Debug modes are not enabled in production paths.
- Error messages do not leak sensitive internals.

## Vulnerable Components

- New dependencies are justified.
- Known vulnerable dependencies are not introduced.

## Authentication

- Sessions, tokens, password flows, and MFA-related paths are reviewed when touched.

## Software And Data Integrity

- Build, plugin, package, and update mechanisms are trusted and pinned when appropriate.

## Logging And Monitoring

- Security-relevant events are logged safely.
- Sensitive data is redacted.

## SSRF

- Server-side URL fetches use allowlists or strict validation when user-controlled.
