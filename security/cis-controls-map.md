# CIS Controls Map

AutoCast supports CIS Controls through engineering gates.

## Inventory And Control

- Dependency additions require justification and review.
- New services, scripts, and integrations must be recorded.

## Secure Configuration

- Configuration changes use secure defaults and least privilege.
- Debug and permissive modes require explicit justification.

## Access Control

- Permission changes use critical route when they affect protected behavior.
- Secrets and credentials must not be exposed.

## Audit Log Management

- Security-relevant logging must avoid sensitive data exposure.

## Malware Defenses And Supply Chain

- New packages and build plugins require supply-chain review.

## Application Software Security

- OWASP checks are required for web/API changes.
- Threat models are required for sensitive flows.
