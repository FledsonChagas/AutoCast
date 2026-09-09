# AutoCast Market Fit Roadmap

## Thesis

AI coding tools are becoming powerful but inconsistent. The market needs a repeatable operating system for AI-assisted delivery: intake, routing, execution, judges, security gates, and evidence.

AutoCast should become that operating layer.

## Positioning

AutoCast is not a model provider, IDE, or generic agent framework.

AutoCast is an SDLC harness layer for agentic coding tools.

## Ideal Users

- Solo builders who want speed without losing control.
- Engineering teams adopting AI coding assistants.
- Security-conscious teams that need DevSecOps gates.
- Consultants who need repeatable delivery playbooks.
- Organizations that need auditable AI-assisted development.

## Differentiators

- Minimum intake questions before execution.
- Risk-based workflow routing.
- Independent judges.
- Security-first gates mapped to known standards.
- Tool adapters for OpenCode, Claude Code, and Cursor.
- Portable project folder, not a hosted lock-in.

## Strategic Risk

If AutoCast remains only Markdown prompts, it will be useful but easy to copy.

The moat improves when AutoCast adds:

- Real eval datasets.
- Measured judge accuracy.
- Permission classifier prompts and policies.
- Runtime contracts for tool execution.
- Reference adapters that work in common agent tools.

## Maturity Levels

## L0: Prompt Pack

Markdown prompts, agents, workflows, and checklists.

Status: current v0.1.

## L1: Project Harness

Project context, task briefs, router decisions, judges, and security evidence are used consistently in real repos.

Status: next milestone.

## L2: Adapter-Enforced Harness

OpenCode, Claude Code, and Cursor adapters load AutoCast rules automatically and apply stricter permissions for judges.

Status: target v0.2.

## L3: Local Runner

A small CLI or script performs intake, route selection, evidence collection, and eval scoring.

Status: target v0.3.

## L4: Managed Harness

Durable sessions, sandbox execution, permission classifiers, event logs, and team-level metrics.

Status: future only if demand justifies it.

## Recommended Next Milestone

Build v0.2 around enforcement and examples:

- Add context engineering policy.
- Add sandbox and permissions classifier standards.
- Add at least 20 eval cases.
- Add one complete example project run.
- Add install guides for OpenCode, Claude Code, and Cursor.

The detailed execution plan lives in `roadmap/v0.3-development-plan.md`.

## Success Metrics

- Route selection accuracy above 90% on internal evals.
- Security-sensitive tasks escalated correctly above 95%.
- False-positive rate for critical route below 15% on legitimate tasks.
- Judge reports catch seeded correctness bugs above 80%.
- Security judge catches seeded high-risk issues above 90%.
- Users can install and run the basic flow in under 10 minutes.
