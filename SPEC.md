# AutoCast Specification

AutoCast is a framework standard and development methodology for AI-assisted software delivery.

It defines how a human, an AI coding agent, and independent judges should collaborate to produce scoped, secure, verified, and evidenced software changes.

## Status

This document defines the AutoCast Core specification for the v0.4 framework-standard track.

## Core Definition

AutoCast is not primarily a CLI, runtime, IDE, or model wrapper.

AutoCast is a standard made of:

- methodology
- workflow contracts
- route definitions
- agent responsibilities
- judge responsibilities
- security profiles
- evidence requirements
- official adapters for real developer tools
- optional reference tooling

## Canonical Loop

```txt
request -> intake -> task brief -> route -> workflow -> build -> verify -> judge -> evidence
```

Every AutoCast-compliant task must pass through these conceptual phases, even when the implementation is lightweight.

## Required Artifacts

An AutoCast project should define or reference:

- project context
- engineering standards
- task brief template
- route decision matrix
- workflow definitions
- agent definitions
- judge rubrics
- security baseline
- evidence template

## Official Routes

| Route | Purpose |
|---|---|
| `fast-lane` | Low-risk local work with simple verification |
| `standard` | Normal feature, bugfix, refactor, or test work |
| `secure-change` | Work involving external input, data, integrations, dependencies, or security-sensitive behavior |
| `critical-change` | Auth, authorization, payments, production data, infrastructure, CI/CD, cryptography, or compliance work |
| `review-only` | Review, diagnosis, architecture, planning, benchmark, or comparison without implementation |

## Required Roles

| Role | Responsibility |
|---|---|
| Router | Ask minimum questions and select the route |
| Planner | Decompose the task when the scope is non-trivial |
| Builder | Implement the smallest correct change |
| Reviewer | Find bugs, regressions, maintainability risks, and missing tests |
| Correctness Judge | Validate output against the task brief and acceptance criteria |
| Test Judge | Validate verification quality |
| Security Judge | Validate security posture and residual risk |

Judges do not build. Builders do not certify their own work.

## Security Principle

AutoCast is secure by default.

The user may choose how strict the harness should be, but every profile starts from a security baseline.

## Official Adapters

The official AutoCast adapter targets are:

- OpenCode
- Claude Code
- Cursor

Adapters are part of the standard because these are the tools developers actually use.

## Optional Tooling

The AutoCast CLI is a reference implementation for validation and measurement. It is not required to use the AutoCast methodology.

The CLI may help with:

- route classification
- eval scoring
- evidence setup
- future conformance checks

But a project can be AutoCast-compliant without running the CLI.

## Non-Goals

- AutoCast is not a hosted agent runtime.
- AutoCast is not an IDE.
- AutoCast is not a replacement for OpenCode, Claude Code, or Cursor.
- AutoCast is not a generic skill catalog.
- AutoCast does not claim perfect security.

## Standard Language

AutoCast is not the only right way to build with AI. It is one right way: scoped, secure, judged, and evidenced.
