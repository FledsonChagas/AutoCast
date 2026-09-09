# AutoCast Security Profile Checklist

Use this checklist to select and validate the security rigor profile.

## Profile Selection

| Signal | Recommended Profile |
|---|---|
| Docs-only or local low-risk change | `minimal` |
| Normal professional software task | `standard` |
| External input, dependency, integration, or sensitive data | `secure` |
| Auth, authorization, payment, production data, infra, CI/CD, crypto, compliance | `critical` |

## Minimal Profile

- scope is clear
- security baseline is acknowledged
- no secrets are exposed
- no external data transfer without approval

## Standard Profile

- everything in `minimal`
- task brief exists
- verification plan exists
- required judges are selected
- evidence is recorded for non-trivial work

## Secure Profile

- everything in `standard`
- trust boundaries are identified
- security judge is required
- dependency/supply-chain changes are reviewed
- sensitive logs/data exposure is checked
- residual risk is recorded

## Critical Profile

- everything in `secure`
- threat model exists when trust boundaries change
- abuse/failure paths are tested
- authorization changes are explicitly reviewed
- CI/CD and infrastructure changes are reviewed
- human approval is required before release
