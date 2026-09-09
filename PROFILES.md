# AutoCast Profiles

AutoCast is secure by default, but users choose how strict they want the harness to be.

Profiles define the expected level of ceremony, security review, and evidence.

## Profiles

| Profile | Use When | Security Level | Friction |
|---|---|---|---|
| `minimal` | Personal work, low-risk tasks, early exploration | baseline | low |
| `standard` | Normal professional development | recommended | medium |
| `secure` | Data, dependencies, integrations, external input | strong | medium-high |
| `critical` | Auth, payments, production, infra, CI/CD, crypto, compliance | strict | high |

## `minimal`

Required:

- task objective
- route selection
- security baseline
- correctness check

Recommended:

- lightweight evidence note
- manual verification

## `standard`

Required:

- task brief
- route selection
- verification plan
- correctness judge
- test judge when tests are relevant
- evidence log

## `secure`

Required:

- everything in `standard`
- security impact classification
- security judge
- dependency and supply-chain review when dependencies change
- residual risk record

## `critical`

Required:

- everything in `secure`
- explicit human approval before release
- threat model when trust boundaries change
- negative tests for abuse or failure paths
- no secret exposure
- no permission widening without justification

## Default Recommendation

Use `standard` by default.

Escalate to `secure` or `critical` when the route requires it.
