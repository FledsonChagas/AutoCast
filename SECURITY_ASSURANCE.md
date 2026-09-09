# AutoCast Security Assurance Pack

AutoCast is secure by default, but security rigor is selected by profile.

This pack defines how AutoCast turns security from a late checklist into a route-aware assurance process.

## Assurance Model

AutoCast security assurance has five layers:

| Layer | Purpose |
|---|---|
| Intake classification | Detect security impact before work starts |
| Profile selection | Choose `minimal`, `standard`, `secure`, or `critical` rigor |
| Security gates | Apply required checks for the selected route/profile |
| Security judge | Independently review sensitive work |
| Evidence | Record controls, findings, mitigations, and residual risk |

## Secure By Default

Every AutoCast profile includes security:

- `minimal`: baseline safety, low friction
- `standard`: normal professional safety
- `secure`: strong review for data, dependencies, integrations, and external input
- `critical`: strict review for auth, authorization, payments, production data, CI/CD, infrastructure, cryptography, and compliance

## Blocking Conditions

Block completion when:

- secrets are exposed
- authorization is weakened without explicit approval
- sensitive data can leak
- dependency or build-chain risk is unknown in a sensitive path
- security controls are bypassed
- CI/CD or infrastructure permissions are widened without review
- critical work lacks required human approval

## Required Evidence

Security evidence should include:

- selected route and profile
- sensitive areas touched
- trust boundaries crossed
- standards reviewed
- tests or verification run
- judge verdicts
- residual risks
- human approval when required

## Relationship To Tooling

Security assurance is part of the framework standard. CLI checks, CI templates, or adapters may help validate it, but they are optional reference tooling.
