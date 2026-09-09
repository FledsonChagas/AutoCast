# Competitive Benchmark: AutoCast v0.3 vs Agent Harness Projects

Date: 2026-09-09

AutoCast version: v0.3

Compared projects:

- `panos-relevance/agent-harness`
- `sevenschulte/agentic-harness`
- `BaseInfinity/claude-sdlc-harness`
- `revfactory/harness`
- `DIodide/Harness`

## Executive Verdict

AutoCast has a credible future, but its winning lane is specific:

```txt
Security-first framework standard and development methodology for AI coding agents.
```

AutoCast should not try to become all of these at once:

- ECC-scale cross-harness mega-pack.
- Claude-only SDLC enforcement wizard.
- Claude Code team-architecture factory.
- Hosted collaborative agent runtime.

The strongest market position is narrower and sharper:

```txt
AutoCast standardizes how teams route, secure, verify, judge, and evidence AI-assisted software work across OpenCode, Claude Code, Cursor, and similar tools.
```

AutoCast is currently strong in conceptual clarity, risk routing, security/compliance language, official adapters, and lightweight measurement. It is still early in formal conformance, external evals, adapter depth, and proof from real users.

## Competitive Map

| Project | Best Description | Main Strength | Main Weakness |
|---|---|---|---|
| AutoCast | AI SDLC framework standard and methodology | Risk-based routing + judges + security profiles + official adapters | Early proof, conformance still formalizing |
| panos/ECC | Cross-harness operator system | Huge catalog, multi-runtime adapters, hooks, skills, CI/security tooling | Large surface area, complexity, harder to trust quickly |
| sevenschulte/agentic-harness | Minimal reference harness | Six-layer clarity, forkability, AGENTS.md/SKILL.md portability | Not a workflow engine, no serious eval/enforcement layer |
| BaseInfinity/claude-sdlc-harness | Claude Code SDLC enforcement | TDD hooks, cross-model review, statistical scoring, CI rigor | Claude-specific, complex, high ceremony |
| revfactory/harness | Team-architecture factory | Generates agent teams and skills from domain descriptions | Claude Code team feature dependent, less SDLC/security focused |
| DIodide/Harness | Hosted multi-tenant agent runtime | Real product UX, sandboxes, live collaboration, secrets isolation | Heavy infra, not a portable SDLC standard, GPL adoption friction |

## Scorecard

Scale: 1 weak, 3 adequate, 5 strong.

| Dimension | AutoCast v0.3 | panos/ECC | sevenschulte | BaseInfinity | revfactory | DIodide |
|---|---:|---:|---:|---:|---:|---:|
| Positioning clarity | 5 | 4 | 5 | 4 | 5 | 5 |
| Adoption clarity | 4 | 4 | 5 | 4 | 4 | 2 |
| Cross-tool portability | 4 | 5 | 4 | 2 | 2 | 3 |
| SDLC workflow depth | 5 | 4 | 2 | 5 | 2 | 2 |
| Security posture | 4 | 5 | 3 | 4 | 2 | 5 |
| Enforcement mechanics | 2 | 5 | 3 | 5 | 3 | 5 |
| Eval rigor | 3 | 4 | 1 | 5 | 3 | 3 |
| Runtime/product depth | 1 | 4 | 1 | 3 | 2 | 5 |
| Agent/team orchestration | 3 | 5 | 2 | 3 | 5 | 4 |
| Context/memory design | 3 | 5 | 5 | 4 | 3 | 3 |
| Developer UX | 4 | 3 | 5 | 4 | 4 | 4 |
| Market proof | 2 | 4 | 2 | 3 | 5 | 2 |
| Total | 40/60 | 52/60 | 38/60 | 46/60 | 40/60 | 43/60 |

Interpretation:

- ECC is the broadest and most mature cross-harness system.
- BaseInfinity is the closest SDLC enforcement competitor and currently has stronger proof mechanics.
- DIodide is not a direct framework competitor; it is a runtime/product competitor.
- revfactory owns the "generate an agent team" idea better than everyone here.
- sevenschulte is the cleanest minimal reference and should influence AutoCast's simplicity.
- AutoCast is not the most mature, but it has the cleanest lane for security-first, tool-agnostic SDLC governance as a framework standard.

## AutoCast Strengths

## 1. Clear SDLC Control-Plane Identity

AutoCast is easier to explain than most competitors:

```txt
intake -> route -> workflow -> build -> verify -> judge -> evidence
```

This is marketable and operationally useful.

## 2. Risk-Based Routing

AutoCast has a strong route taxonomy:

- `fast-lane`
- `standard`
- `secure-change`
- `critical-change`
- `review-only`

This is one of our strongest differentiators. Most competitors have workflows, but not a clear minimum-question router that changes process based on risk.

## 3. Security And Compliance Language

AutoCast explicitly maps to:

- OWASP
- NIST SSDF
- CIS Controls
- DevSecOps
- supply-chain review
- permission classification
- security judges

This makes AutoCast credible for teams that care about enterprise and regulated environments.

## 4. Framework-First Position

AutoCast is not primarily a program. It is a framework standard and methodology. The CLI is only a reference validator.

This reduces adoption friction because teams can incorporate AutoCast into existing workflows without accepting a mandatory runtime.

## 5. Tool-Agnostic Position

AutoCast is not locked to Claude Code. The official adapter surface includes:

- OpenCode
- Claude Code
- Cursor

That gives AutoCast better strategic optionality than Claude-only projects.

## 6. Lightweight Runner Without Runtime Overreach

The v0.3 runner measures route selection and evidence setup without pretending to be a full coding runtime.

This is the right level of ambition for now.

## AutoCast Weaknesses

## 1. Formal Conformance Is Still Young

AutoCast has routes, workflows, profiles, evidence, adapters, and a reference runner. It still needs a clearer conformance model so users can tell whether they are using AutoCast lightly, seriously, securely, or in a verified way.

Missing:

- formal specification
- conformance levels
- adoption profiles
- bilingual standard docs
- framework-first benchmark language

This is the main v0.4 focus.

## 2. Adapters Need More Depth

AutoCast treats OpenCode, Claude Code, and Cursor as official parts of the standard, but the adapters are still early.

Missing:

- richer examples per tool
- known limitations per tool
- adapter conformance checklists
- official invocation prompts per profile

## 3. No Hook Layer

AutoCast has a permission classifier prompt, but it does not yet wire hooks into Claude Code/OpenCode/Cursor behavior.

BaseInfinity's strongest edge is hook enforcement before tool use. AutoCast should adopt the idea, but keep it tool-agnostic and route-based.

## 4. Eval Suite Is Still Self-Authored And Narrow

AutoCast v0.3 scores 100% on 60 route-selection cases. That is useful calibration, not market proof.

Weaknesses:

- no real user traffic samples
- no with/without AutoCast A/B evals
- no model-driven judge calibration
- no false-positive dataset
- no seeded code-change benchmark

BaseInfinity and revfactory are ahead on measurement philosophy.

## 5. No CI Template Yet

AutoCast needs GitHub Actions that run:

- route evals
- schema validation
- secret pattern checks
- markdown link checks
- adapter pack checks

Panos/ECC and BaseInfinity both show that CI is part of the product.

## 6. No Memory Lifecycle

AutoCast has context policy, but not an operational memory lifecycle.

sevenschulte and ECC are stronger here with explicit memory/coding-standard directories and session save/wrap-up skills.

## 7. No Team-Architecture Generator

AutoCast has agents and judges, but does not yet generate domain-specific agent teams.

revfactory owns this pattern. AutoCast can incorporate a smaller version focused only on SDLC tasks.

## Lessons To Steal

## From panos/ECC

What to learn:

- Manifest-driven selective adoption.
- `doctor`, `repair`, `list-installed`, `uninstall` lifecycle as optional tooling patterns, not framework requirements.
- Cross-harness adapter compliance tests.
- CI validation for agents, commands, hooks, rules, skills, manifests.
- Supply-chain IOC scanning.
- Component catalog and install profiles.
- Multi-language and multi-runtime packaging.

What not to copy:

- Massive surface area too early.
- Too many skills before proving core adoption.
- Marketing metrics unless independently verifiable.

AutoCast action:

- Build conformance checklists and optional adapter validators before adding more features.

## From sevenschulte/agentic-harness

What to learn:

- Six-layer simplicity: identity, rules, skills, hooks, memory, scheduled agents.
- AGENTS.md and CLAUDE.md sync pattern.
- `.agents/skills/` portability story.
- Memory/coding-standards directory structure.
- "Fork-friendly, read in 20 minutes" positioning.

What not to copy:

- Lack of workflow/eval enforcement.
- Treating it as reference-only when AutoCast aims to become a standard.

AutoCast action:

- Add an AutoCast six-layer install profile and AGENTS.md/CLAUDE.md sync checks.

## From BaseInfinity/claude-sdlc-harness

What to learn:

- One-command setup wizard.
- Hook-level enforcement before prompts/tools.
- TDD pre-tool checks.
- Cross-model review for high-stakes changes.
- E2E scoring, confidence intervals, CUSUM drift detection.
- "Prove custom beats native or delete it" discipline.
- Stable vs experimental lanes.
- Honest known-defect disclosure.

What not to copy:

- Claude-only depth as the default strategy.
- Very high ceremony for normal work.
- Model-specific claims that may age quickly.

AutoCast action:

- Add route-based hook profiles and statistical eval methodology, but keep fast-lane lightweight.

## From revfactory/harness

What to learn:

- Meta-factory framing.
- Six agent team architecture patterns:
  - Pipeline
  - Fan-out/Fan-in
  - Expert Pool
  - Producer-Reviewer
  - Supervisor
  - Hierarchical Delegation
- With-skill vs baseline testing.
- Progressive disclosure for generated skills.
- Clear "what layer are we?" positioning.
- Concrete use-case prompts.

What not to copy:

- Claude Code Agent Teams dependency as the only path.
- Broad domain generation before SDLC core is proven.

AutoCast action:

- Add `autocast design-team` later, but only for SDLC work patterns first.

## From DIodide/Harness

What to learn:

- Real runtime/product UX matters.
- Live collaboration and shareable sessions are powerful.
- Approval cards are better UX than raw terminal prompts.
- Secrets should stay server-side and out of sandboxes.
- MCP relay and sandbox isolation are strong architecture patterns.
- Rewind/fork/session observability is a future category-defining feature.

What not to copy:

- Heavy hosted infra before AutoCast has demand.
- GPL if enterprise framework adoption is the goal.
- Full product complexity before adapter enforcement is stable.

AutoCast action:

- Keep hosted/runtime ideas in future research. Prioritize local adoption first.

## Best-Of Architecture For AutoCast

The ideal next AutoCast architecture should combine:

| Source | Pattern To Absorb | AutoCast Form |
|---|---|---|
| AutoCast | Risk router | Keep as core differentiator |
| ECC | Selective install/doctor lifecycle | optional conformance and adapter validators |
| sevenschulte | Six-layer simplicity | `profiles/minimal`, `profiles/standard`, `profiles/strict` |
| BaseInfinity | Hook enforcement and statistical evals | route-based hooks + CI eval gates |
| revfactory | Team patterns | optional SDLC team designer |
| DIodide | Sandbox/secrets architecture | future runtime guidance, not immediate build |

## Recommended Market Position

AutoCast should use this positioning:

```txt
AutoCast is the security-first framework standard and methodology for AI-assisted software delivery.
```

Supporting line:

```txt
It turns requests into routed, verified, judged, and evidenced software work across OpenCode, Claude Code, Cursor, and agentic coding tools.
```

Avoid this positioning:

```txt
AutoCast is a complete agent runtime.
```

That would put AutoCast against DIodide and runtime platforms too early.

## Strategic Roadmap After v0.3

## v0.4: Framework Specification

Goal: make AutoCast formally understandable, adoptable, and bilingual as a standard.

Deliverables:

- `SPEC.md` and `SPEC.pt-BR.md`
- `METHODOLOGY.md` and `METHODOLOGY.pt-BR.md`
- `CONFORMANCE.md` and `CONFORMANCE.pt-BR.md`
- `PROFILES.md` and `PROFILES.pt-BR.md`
- `ADOPTION.md` and `ADOPTION.pt-BR.md`
- `REFERENCE_IMPLEMENTATION.md` and `REFERENCE_IMPLEMENTATION.pt-BR.md`
- `ADAPTERS.md` and `ADAPTERS.pt-BR.md`
- `MANIFESTO.md` and `MANIFESTO.pt-BR.md`
- `README.pt-BR.md`

Why:

- Moves AutoCast from useful framework package into formal framework standard.

## v0.5: Conformance And Evaluation

Goal: make AutoCast adoption measurable without making the CLI mandatory.

Deliverables:

- GitHub Actions template.
- route eval gate.
- security escalation eval gate.
- judge calibration suite.
- false-positive suite.
- with/without AutoCast A/B benchmark design.
- seeded bug benchmark.

Why:

- Competes with BaseInfinity's measurement story and revfactory's A/B claims.

## v0.6: Security Gate Enforcement

Goal: make security gates more than Markdown.

Deliverables:

- permissions classifier CLI mode
- risky command classifier
- secret exposure detector
- dependency-change detector
- CI/CD change detector
- route escalation report
- SARIF or Markdown security report output

Why:

- Strengthens AutoCast's security-first market claim.

## v0.7: SDLC Team Designer

Goal: absorb the best of revfactory without losing focus.

Deliverables:

- `autocast design-team --task <brief>`
- SDLC-only team patterns:
  - feature team
  - bugfix team
  - security review team
  - migration team
  - release team
- generated agents and judge maps

Why:

- Adds meta-factory power while staying inside AutoCast's SDLC niche.

## What AutoCast Should Not Do Yet

- Do not build a hosted multi-tenant runtime.
- Do not add hundreds of generic skills.
- Do not optimize for every AI tool before OpenCode/Claude/Cursor are strong.
- Do not claim eval proof from self-authored route tests alone.
- Do not make every task high-ceremony.
- Do not hide known limitations.

## Bottom Line

AutoCast is behind the strongest competitors in enforcement maturity and empirical proof, but ahead in having a clean security-first SDLC framework-standard identity.

The next winning move is not more prompts. It is framework specification plus credible evals.

Priority order:

1. Framework specification.
2. Conformance levels.
3. Bilingual adoption docs.
4. Security profiles.
5. Evaluation methodology.
6. Official adapter clarity.
7. Real-world adoption proof.
