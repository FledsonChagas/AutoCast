# AutoCast Roadmap

AutoCast is currently moving from `v0.4` into the `v0.5` conformance-and-evaluation track.

The next target is `v0.5`: measurable conformance and evaluation without mandatory tooling.

## Direction

AutoCast should become the security-first SDLC framework standard for coding agents.

It should focus on:

- Intake quality.
- Route selection.
- Security-first workflows.
- Independent judges.
- Evidence collection.
- Tool-specific adapters.
- Eval-backed claims.
- Bilingual framework documentation.

It should avoid becoming an unfocused generic runtime too early.

## Milestones

| Version | Theme | Outcome |
|---|---|---|
| `v0.1` | Harness standard | Markdown workflows, agents, judges, security baseline |
| `v0.2` | Adapter enforcement | Strong OpenCode, Claude Code, Cursor installation paths, examples, and eval expansion |
| `v0.3` | Measurable harness | Eval suite, scoring, evidence conventions, schemas, and optional local runner |
| `v0.4` | Framework specification | Formal spec, methodology, conformance, profiles, adoption docs, bilingual core |
| `v0.5` | Conformance and evaluation | Checklist, evaluation methodology, benchmark protocol, judge calibration, false-positive/negative evals |

## v0.2 Goals

- Add complete installation guides for OpenCode, Claude Code, and Cursor.
- Add runnable examples for feature, bugfix, review, and security hardening.
- Expand evals to at least 20 cases.
- Add stricter permission classifier prompts.
- Add evidence templates for real project runs.
- Improve README, onboarding, and project positioning.

## v0.3 Goals

- Add at least 60 structured eval cases.
- Measure route accuracy, security escalation recall, and critical escalation recall.
- Add an optional local runner for routing, eval scoring, reports, and evidence setup.
- Add sandbox strategy validation.
- Add mature adapter packs for OpenCode, Claude Code, and Cursor.
- Publish benchmark results against known failure patterns.

## v0.4 Goals

- Define AutoCast as framework standard and methodology.
- Clarify CLI as optional reference tooling.
- Define conformance levels from L0 to L5.
- Define secure-by-default profiles with user-selectable rigor.
- Make OpenCode, Claude Code, and Cursor official adapters.
- Mirror core documentation in English and Portuguese.

## v0.5 Goals

- Add conformance checklist in English and Portuguese.
- Add evaluation methodology in English and Portuguese.
- Add with/without AutoCast benchmark protocol.
- Add judge calibration guidance.
- Add route decision examples.
- Add false-positive and false-negative eval suites.
- Add optional CI template for reference checks.

## Success Metrics

- Route selection accuracy: 90% or higher.
- Critical escalation recall: 95% or higher.
- Security high-risk detection: 90% or higher.
- Correctness blocker detection: 80% or higher.
- Installation time: under 10 minutes.
- False-positive rate for critical route: under 15% on legitimate tasks.

## Detailed Plan

See `roadmap/v0.3-development-plan.md`.

For the current post-v0.3 plan, see `roadmap/post-v0.3-market-hardening.md`.
