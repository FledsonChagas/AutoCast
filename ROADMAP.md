# AutoCast Roadmap

AutoCast is currently `v0.1`: a portable harness standard for AI-assisted software delivery.

The next target is `v0.3`: a measurable, adapter-ready local harness that can establish AutoCast as a practical market standard.

## Direction

AutoCast should become the SDLC control-plane for coding agents.

It should focus on:

- Intake quality.
- Route selection.
- Security-first workflows.
- Independent judges.
- Evidence collection.
- Tool-specific adapters.
- Eval-backed claims.

It should avoid becoming an unfocused generic runtime too early.

## Milestones

| Version | Theme | Outcome |
|---|---|---|
| `v0.1` | Harness standard | Markdown workflows, agents, judges, security baseline |
| `v0.2` | Adapter enforcement | Strong OpenCode, Claude Code, Cursor installation paths and examples |
| `v0.3` | Measurable harness | Eval suite, scoring, evidence conventions, optional local runner |

## v0.2 Goals

- Add complete installation guides for OpenCode, Claude Code, and Cursor.
- Add runnable examples for feature, bugfix, review, and security hardening.
- Expand evals to at least 20 cases.
- Add stricter permission classifier prompts.
- Add evidence templates for real project runs.
- Improve README, onboarding, and project positioning.

## v0.3 Goals

- Add at least 60 eval cases.
- Measure route accuracy, security escalation recall, judge accuracy, and false positives.
- Add an optional local runner for intake, routing, and evidence collection.
- Add sandbox strategy validation.
- Add mature adapter packs for OpenCode, Claude Code, and Cursor.
- Publish benchmark results against known failure patterns.

## Success Metrics

- Route selection accuracy: 90% or higher.
- Critical escalation recall: 95% or higher.
- Security high-risk detection: 90% or higher.
- Correctness blocker detection: 80% or higher.
- Installation time: under 10 minutes.
- False-positive rate for critical route: under 15% on legitimate tasks.

## Detailed Plan

See `roadmap/v0.3-development-plan.md`.
