# Post-v0.3 Framework Standard Plan

This roadmap is derived from `benchmarks/competitive/2026-09-harness-framework-benchmark.md` and the v0.4 alignment decision.

## Strategic Thesis

AutoCast should become a framework standard and development methodology for AI-assisted software delivery.

The priority is not to make AutoCast a mandatory program.

The priority is to make AutoCast a clear, adoptable, secure, and measurable standard.

```txt
framework standard first, optional tooling second
```

## Product Model

```txt
AutoCast Core = framework standard and methodology
AutoCast Adapters = official mappings for OpenCode, Claude Code, and Cursor
AutoCast CLI = optional reference validator
```

## v0.4: Framework Specification

## Objective

Formalize AutoCast as a bilingual framework standard.

## Deliverables

- `SPEC.md` and `SPEC.pt-BR.md`
- `METHODOLOGY.md` and `METHODOLOGY.pt-BR.md`
- `CONFORMANCE.md` and `CONFORMANCE.pt-BR.md`
- `PROFILES.md` and `PROFILES.pt-BR.md`
- `ADOPTION.md` and `ADOPTION.pt-BR.md`
- `REFERENCE_IMPLEMENTATION.md` and `REFERENCE_IMPLEMENTATION.pt-BR.md`
- `ADAPTERS.md` and `ADAPTERS.pt-BR.md`
- `MANIFESTO.md` and `MANIFESTO.pt-BR.md`
- `README.pt-BR.md`
- revised competitive benchmark with framework-first language

## Acceptance Criteria

- AutoCast is described as framework standard and methodology.
- CLI is described as optional reference tooling.
- OpenCode, Claude Code, and Cursor are official adapters.
- Secure-by-default profiles are documented.
- Conformance levels are defined from L0 to L5.
- Core documentation is mirrored in English and Portuguese.

## v0.5: Conformance And Evaluation

## Objective

Make adoption measurable without requiring heavy tooling.

## Deliverables

- conformance checklist
- route decision examples
- false-positive and false-negative evals
- judge calibration guide
- with/without AutoCast benchmark protocol
- optional CI template for conformance validation

## v0.6: Security Assurance Pack

## Objective

Turn secure-by-default into a stronger assurance story.

## Deliverables

- security profile checklist
- critical-change threat model pack
- permission classifier examples
- dependency and supply-chain evidence examples
- OWASP/NIST/CIS mapping refinements
- security evidence examples for PRs

## v0.7: Reference Adapters

## Objective

Make official adapters clearer and more complete while keeping implementation optional.

## Deliverables

- OpenCode reference setup
- Claude Code reference setup
- Cursor reference setup
- adapter conformance checklist
- adapter limitations matrix
- examples of official invocation prompts

## v0.8: Adoption Evidence

## Objective

Prove AutoCast works outside its own repository.

## Deliverables

- 3 real or realistic project case studies
- before/after task quality comparison
- time-to-brief metric
- judge finding quality report
- security escalation recall on real-like tasks

## Non-Goals

- No hosted SaaS before adoption evidence.
- No massive generic skill catalog before the framework standard is trusted.
- No Claude-only lock-in.
- No claim of perfect security.
- No statistical claims without methodology and raw results.
- No mandatory CLI requirement for conformance.

## Priority Stack

1. Framework specification.
2. Conformance levels.
3. Bilingual adoption docs.
4. Security profiles.
5. Evaluation methodology.
6. Official adapter clarity.
7. Real-world adoption proof.
