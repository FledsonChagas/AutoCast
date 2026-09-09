<div align="center">

# AutoCast

### The AI SDLC Framework Standard

Make AI coding agents predictable, secure, reviewable, and repeatable.

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-v0.5%20candidate-orange.svg)](ROADMAP.md)
[![Security](https://img.shields.io/badge/security-OWASP%20%7C%20NIST%20%7C%20CIS-green.svg)](SECURITY.md)
[![Tools](https://img.shields.io/badge/tools-OpenCode%20%7C%20Claude%20Code%20%7C%20Cursor-purple.svg)](#tool-support)

**Open source | Apache-2.0 | framework standard | methodology | security-first | tool-agnostic**

[Portuguese (Brazil)](README.pt-BR.md)

</div>

## What Is AutoCast?

AutoCast is a portable framework standard and development methodology for running AI-assisted software delivery through a controlled harness.

It wraps tools like OpenCode, Claude Code, Cursor, and similar coding agents with a repeatable SDLC standard:

```txt
request -> intake -> task brief -> route -> workflow -> build -> verify -> judge -> evidence
```

The goal is simple: keep the speed of AI coding while reducing drift, over-scoping, weak reviews, missing tests, and late security surprises.

## The m4g0 Rule

AutoCast is the harness of the `m4g0`.

When a `m4g0` needs a spell, they do not scream random incantations into three different agents and hope the code compiles. They AutoCast it: choose the spell, bind the scope, summon the judges, check for cursed dependencies, and only then release the magic.

That joke is the product philosophy.

AI is powerful. Uncontrolled AI is a fireball in a wooden tavern.

## Why It Exists

AI coding agents are already fast. The hard part is making them reliable enough for real delivery.

Common failure modes:

- The prompt is vague and the agent fills gaps incorrectly.
- The agent changes more than the user asked.
- Security is reviewed after the risky action already happened.
- The same task gets different quality in different tools.
- The agent reviews its own work and says everything is fine.
- Teams cannot explain why an AI-generated change was accepted.

AutoCast solves this by treating prompts, judges, workflows, security gates, and evidence as engineering artifacts.

## What AutoCast Provides

| Layer | Purpose |
|---|---|
| Intake | Ask the minimum questions needed to execute safely |
| Router | Select the right route based on task type and risk |
| Workflows | Standardize feature, bugfix, refactor, review, test, and security work |
| Agents | Separate planner, builder, reviewer, and judge responsibilities |
| Judges | Validate correctness, tests, security, and review quality |
| Security | Apply OWASP, NIST SSDF, CIS Controls, DevSecOps, and supply-chain gates |
| Evals | Measure whether routing, judges, and security decisions are improving |
| Adapters | Bring the same standard to OpenCode, Claude Code, and Cursor |
| Reference Tooling | Optional local CLI for routing, eval scoring, and evidence setup |

## Framework Architecture

```txt
                 user request
                      |
                      v
              AutoCast intake
                      |
                      v
              task brief contract
                      |
                      v
          risk and route classifier
                      |
      +---------------+---------------+
      |               |               |
      v               v               v
  fast-lane        standard      secure/critical
      |               |               |
      v               v               v
   builder       planner+builder   planner+builder
      |               |               |
      v               v               v
 correctness    correctness+tests  correctness+tests+security
      |               |               |
      +---------------+---------------+
                      |
                      v
              evidence record
```

AutoCast is a framework standard first. It is not a full runtime and does not replace existing coding agents.

## Routes

AutoCast does not use the same process for a typo and an authentication change.

| Route | Use When | Required Validation |
|---|---|---|
| `fast-lane` | Low-risk local change | Correctness judge |
| `standard` | Normal feature, bugfix, refactor, or tests | Correctness and test judges |
| `secure-change` | External input, dependencies, data, integrations, security-sensitive code | Correctness, tests, security judge |
| `critical-change` | Auth, authorization, payments, production data, infra, CI/CD, crypto, compliance | Planner, builder, reviewer, judges, human approval |
| `review-only` | Review, diagnosis, architecture, benchmark, or plan | Reviewer or planner, plus security if sensitive |

Routing starts from `intake/minimum-questions.md` and `router/decision-matrix.md`.

## Agents

AutoCast separates responsibilities. One agent should not plan, build, review, and certify itself.

| Agent | Responsibility |
|---|---|
| `router` | Ask minimum questions and choose the route |
| `planner` | Decompose the task safely |
| `builder` | Implement the smallest correct change |
| `reviewer` | Find bugs, regressions, maintainability risks, and missing tests |
| `judge-correctness` | Validate the result against acceptance criteria |
| `judge-tests` | Validate verification quality |
| `judge-security` | Validate security and compliance risk |

Judges do not build. Builders do not grade their own work.

## Install

Choose the path that fits your workflow.

### Path A: Add AutoCast To A Project

```bash
git clone https://github.com/FledsonChagas/AutoCast.git autocast
```

Then start from:

```txt
autocast/workflows/autocast-run.md
```

### Path B: Use AutoCast As A Git Submodule

```bash
git submodule add https://github.com/FledsonChagas/AutoCast.git autocast
git submodule update --init --recursive
```

This is useful when you want to keep AutoCast versioned separately from your application code.

### Path C: Use AutoCast As A Project AI Standard

Copy or reference these files from your project instructions:

```txt
autocast/MANUAL.md
autocast/prompts/autocast-orchestrator.md
autocast/workflows/autocast-run.md
autocast/router/decision-matrix.md
autocast/security/security-baseline.md
```

## Quick Start

1. Add AutoCast to your project as `autocast/` or `.ai/autocast/`.
2. Fill `context/project-brief.md`.
3. Fill `context/engineering-standards.md`.
4. Start every AI coding task with `workflows/autocast-run.md`.
5. Let the router choose the route.
6. Run the selected workflow.
7. Run the required judges.
8. Record evidence before considering the task complete.

## Reference Tooling

AutoCast includes an optional dependency-free local runner as a reference validator.

```bash
node bin/autocast.mjs route --task "Add password reset to the app"
node bin/autocast.mjs eval --strict
node bin/autocast.mjs report --out .autocast/reports/route-selection-report.md
```

The runner does not replace your coding agent and is not required for conformance. It measures and automates reference behavior: route selection, eval scoring, and evidence setup.

## Use It Inside Your Dev Flow

Use this prompt with your coding agent:

```md
Use AutoCast for this task.

Start at `autocast/workflows/autocast-run.md`.
Ask only the minimum blocking intake questions.
Create a task brief.
Select the route using `autocast/router/decision-matrix.md`.
Apply `autocast/security/security-baseline.md`.
Implement only if the selected route allows code changes.
Run the required judges before finalizing.

Task:
<describe the task here>
```

Daily development pattern:

```txt
1. Open issue, bug report, or feature request.
2. Ask AutoCast to route it.
3. Confirm the task brief.
4. Let the builder implement the smallest correct change.
5. Run verification.
6. Ask judges to review correctness, tests, and security.
7. Fix blockers.
8. Record evidence.
```

## Tool Support

AutoCast is designed to work with the tools developers already use.

| Tool | Adapter | Status |
|---|---|---|
| OpenCode | `adapters/opencode/` | Initial adapter |
| Claude Code | `adapters/claude-code/` | Initial adapter |
| Cursor | `adapters/cursor/` | Initial adapter |

OpenCode users can start with `adapters/opencode/install.md` and copy agent files from `adapters/opencode/agents/` into `.opencode/agent/` or `.opencode/agents/`. Restart OpenCode after changing agents, skills, plugins, MCP servers, permission rules, or config files.

Claude Code users can start with `adapters/claude-code/install.md` and merge `adapters/claude-code/CLAUDE.md` into their project `CLAUDE.md`.

Cursor users can start with `adapters/cursor/install.md` and copy `adapters/cursor/rules/autocast.mdc` into `.cursor/rules/`.

## Security Model

Security is not an optional final checklist. It is part of the route.

AutoCast applies security in four layers:

| Layer | Purpose |
|---|---|
| Intake classification | Detect sensitive work before coding |
| Permission classifier | Block or escalate dangerous actions before execution |
| Secure workflow gates | Apply OWASP, NIST SSDF, CIS, DevSecOps, and supply-chain controls |
| Security judge | Review the final change before completion |

Blocking conditions include:

- Secret exposure.
- Authorization weakening.
- Unsafe dependency or supply-chain change.
- Sensitive data leakage.
- Unreviewed permission widening.
- CI/CD or security control bypass.
- External data transfer without explicit approval.

Start with `SECURITY.md`, `security/security-baseline.md`, `security/permissions-classifier.md`, and `security/assurance-model.md`.

## Example: Password Reset

User request:

```txt
Add password reset to the app.
```

AutoCast route:

```txt
critical-change
```

Reason:

```txt
Authentication, tokens, email flow, user identity, and account takeover risk.
```

Required controls:

- Threat model.
- Server-side authorization review.
- Token lifetime and storage review.
- Positive and negative tests.
- Security judge.
- Human approval before release.

## Directory Map

```txt
AutoCast/
  README.md
  README.pt-BR.md
  SPEC.md
  SPEC.pt-BR.md
  METHODOLOGY.md
  METHODOLOGY.pt-BR.md
  CONFORMANCE.md
  CONFORMANCE.pt-BR.md
  CONFORMANCE_CHECKLIST.md
  CONFORMANCE_CHECKLIST.pt-BR.md
  PROFILES.md
  PROFILES.pt-BR.md
  ADOPTION.md
  ADOPTION.pt-BR.md
  EVALUATION.md
  EVALUATION.pt-BR.md
  BENCHMARK_PROTOCOL.md
  BENCHMARK_PROTOCOL.pt-BR.md
  JUDGE_CALIBRATION.md
  JUDGE_CALIBRATION.pt-BR.md
  ROUTE_EXAMPLES.md
  ROUTE_EXAMPLES.pt-BR.md
  REFERENCE_IMPLEMENTATION.md
  REFERENCE_IMPLEMENTATION.pt-BR.md
  ADAPTERS.md
  ADAPTERS.pt-BR.md
  MANIFESTO.md
  MANIFESTO.pt-BR.md
  MANUAL.md
  ROADMAP.md
  SECURITY.md
  LICENSE
  autocast.config.example.yml
  principles.md
  agents/
  adapters/
  benchmarks/
  context/
  evals/
  intake/
  prompts/
  roadmap/
  router/
  rubrics/
  runtime/
  security/
  templates/
  workflows/
```

## Documentation

| Document | Purpose |
|---|---|
| `SPEC.md` / `SPEC.pt-BR.md` | AutoCast framework standard specification |
| `METHODOLOGY.md` / `METHODOLOGY.pt-BR.md` | Development methodology |
| `CONFORMANCE.md` / `CONFORMANCE.pt-BR.md` | L0-L5 conformance model |
| `CONFORMANCE_CHECKLIST.md` / `CONFORMANCE_CHECKLIST.pt-BR.md` | Human-readable conformance checklist |
| `PROFILES.md` / `PROFILES.pt-BR.md` | Secure-by-default profiles |
| `ADOPTION.md` / `ADOPTION.pt-BR.md` | Adoption guide |
| `EVALUATION.md` / `EVALUATION.pt-BR.md` | Evaluation methodology |
| `BENCHMARK_PROTOCOL.md` / `BENCHMARK_PROTOCOL.pt-BR.md` | With/without AutoCast benchmark protocol |
| `JUDGE_CALIBRATION.md` / `JUDGE_CALIBRATION.pt-BR.md` | Judge calibration guide |
| `ROUTE_EXAMPLES.md` / `ROUTE_EXAMPLES.pt-BR.md` | Route decision examples |
| `REFERENCE_IMPLEMENTATION.md` / `REFERENCE_IMPLEMENTATION.pt-BR.md` | Optional tooling and reference validator positioning |
| `ADAPTERS.md` / `ADAPTERS.pt-BR.md` | Official adapter standard |
| `MANIFESTO.md` / `MANIFESTO.pt-BR.md` | AutoCast philosophy |
| `CHANGELOG.md` | Version history and unreleased changes |
| `docs/CLI.md` | Optional reference CLI usage |
| `docs/EVALS.md` | Eval format, metrics, and targets |
| `docs/EVIDENCE.md` | Evidence templates and local evidence workflow |
| `docs/INSTALL.md` | Adoption and optional tooling options |
| `docs/VERSIONING.md` | Version milestones and merge policy |
| `MANUAL.md` | How to operate and customize AutoCast |
| `ROADMAP.md` | Version direction and maturity targets |
| `SECURITY.md` | Security policy and sensitive-area rules |
| `adapters/*/install.md` | Tool-specific installation guides |
| `examples/README.md` | Example AutoCast runs by route |
| `roadmap/v0.3-development-plan.md` | Detailed plan to reach v0.3 |
| `roadmap/post-v0.3-market-hardening.md` | Competitive roadmap after v0.3 |
| `benchmarks/nexu-harness-engineering-guide.md` | External benchmark against Nexu's harness guide |
| `benchmarks/competitive/2026-09-harness-framework-benchmark.md` | Competitive benchmark against adjacent harness projects |
| `runtime/agentic-loop-contract.md` | Runtime expectations for agent tools |
| `context/context-engineering.md` | Context priority and compression rules |
| `evals/benchmark-plan.md` | Measurement plan for routing, judges, and security |

## Benchmark Position

AutoCast was benchmarked against the Nexu Harness Engineering Guide in `benchmarks/nexu-harness-engineering-guide.md`.

The conclusion:

- Nexu is stronger for learning how to build agent runtimes from first principles.
- AutoCast is stronger as an applied SDLC harness for shipping software with existing coding agents.
- AutoCast should not become another generic runtime unless demand proves it.
- AutoCast should become the practical framework standard for safe AI-assisted delivery.

## Roadmap

Current status: `v0.5` candidate on the conformance-and-evaluation track.

Near target: measurable conformance and evaluation without mandatory tooling.

The v0.5 plan focuses on:

- Conformance checklist.
- Evaluation methodology.
- False-positive and false-negative eval suites.
- Judge calibration guidance.
- With/without AutoCast benchmark protocol.
- Optional CI template for reference checks.

See `ROADMAP.md` and `roadmap/post-v0.3-market-hardening.md`.

## Market Bet

The winning category is not "better prompts".

The winning category is a framework standard for AI-assisted software delivery.

AutoCast aims to define that standard.

## Status

AutoCast is early. It is currently a framework standard and methodology, not a full executable runtime.

The next versions will focus on conformance, evaluation, security assurance, official adapters, and adoption proof.

## License

Licensed under the Apache License 2.0. See `LICENSE`.

AutoCast is a project name and should not be used to imply official endorsement without permission.
