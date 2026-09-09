# Benchmark: Nexu Harness Engineering Guide

Source: `https://github.com/nexu-io/harness-engineering-guide`

Reviewed focus areas:

- Harness definition and agentic loop.
- Tool system and skill loading.
- Memory and context engineering.
- Guardrails and sandboxing.
- Sub-agents and multi-agent orchestration.
- Error handling and long-running harnesses.
- Managed agents and eval infrastructure.
- Classifier-based permissions and eval awareness.

## Executive Summary

Nexu's guide is stronger as a reference for building agent runtimes from first principles. AutoCast is stronger as an opinionated SDLC harness for shipping software safely with existing tools like OpenCode, Claude Code, and Cursor.

They are not direct equivalents.

- Nexu answers: "How do I build and reason about a production agent harness?"
- AutoCast answers: "How do I run software delivery work through AI safely, repeatedly, and with judges?"

AutoCast has a valid market path if it stays focused on applied development workflows, security gates, tool adapters, and measurable evals. It should not try to become a generic LangChain/CrewAI replacement unless there is a concrete runtime need.

## Scorecard

Scale: 1 weak, 3 acceptable, 5 strong.

| Dimension | Nexu Guide | AutoCast v0.1 | AutoCast Target v0.3 |
|---|---:|---:|---:|
| Runtime internals | 5 | 2 | 4 |
| Agentic loop and error handling | 5 | 2 | 4 |
| Context and memory | 5 | 2 | 4 |
| Tool and skill extensibility | 5 | 3 | 4 |
| Multi-agent orchestration | 5 | 4 | 5 |
| Security enforcement | 4 | 3 | 5 |
| Eval discipline | 4 | 2 | 4 |
| SDLC workflow usability | 3 | 5 | 5 |
| OpenCode/Claude Code/Cursor fit | 3 | 5 | 5 |
| Intake and route selection | 2 | 5 | 5 |
| Total | 41/50 | 33/50 | 45/50 |

Interpretation:

- Nexu is ahead in engineering depth.
- AutoCast is ahead in immediate workflow packaging.
- AutoCast can become market-grade by adding enforcement, evals, context policy, and runtime boundaries.

## Where Nexu Is Better

## 1. Runtime Mechanics

Nexu explains the low-level mechanics of a harness: agentic loop, tool dispatch, max turns, tool error handling, streaming, retries, and loop detection.

AutoCast currently defines workflows and roles, but does not yet provide a runnable loop or reference implementation.

Required AutoCast improvement:

- Add a runtime contract and optional runner.
- Define turn budgets, exit conditions, retry rules, and loop detection.

## 2. Context Engineering

Nexu is much stronger on context assembly, token budgeting, compression, memory, session boundaries, daily logs, and long-term memory.

AutoCast currently has project context files, but no explicit token priority policy.

Required AutoCast improvement:

- Add priority-based context rules.
- Define what must always be loaded, what is optional, and what must be compressed or dropped.

## 3. Sandbox And Runtime Isolation

Nexu treats sandboxing as a first-class runtime concern: Docker, Firecracker, network isolation, read-only mounts, non-root execution, seccomp, and disposable environments.

AutoCast has a security baseline, but mostly as checklist/policy. It needs stronger execution guidance.

Required AutoCast improvement:

- Add sandbox strategy.
- Define what is enforced by tool config vs. what is only reviewed by judges.

## 4. Permission Classifier

Nexu includes a strong pattern for classifier-based permissions: separate model, two-stage classification, reasoning-blind review, tiered decision flow, and false-positive evaluation.

AutoCast has security judges, but a judge after implementation is not the same as a gate before dangerous tool execution.

Required AutoCast improvement:

- Add a pre-execution permissions classifier design.
- Keep security judge as post-change validation.

## 5. Eval Sophistication

Nexu covers eval infrastructure noise, eval awareness, resource variability, benchmark contamination, and infrastructure specs.

AutoCast has starter eval cases, but no formal eval harness or scoring dataset yet.

Required AutoCast improvement:

- Build eval sets for route selection, judge accuracy, security classification, and false-positive rate.

## Where AutoCast Is Better

## 1. Applied SDLC Flow

AutoCast is immediately oriented around software delivery:

- Feature development.
- Bugfix.
- Refactor.
- Code review.
- Test generation.
- Security hardening.

Nexu is broader and more educational. AutoCast is more directly usable inside a real repo.

## 2. Intake And Routing

AutoCast has a clear mechanism for minimum questions, risk classification, and route selection.

This is a meaningful differentiator. Most AI coding failures start before coding, because the task was not scoped or risk-classified.

## 3. Judge-Oriented Delivery

AutoCast separates builder, reviewer, correctness judge, test judge, and security judge.

Nexu covers generator-evaluator architecture, but AutoCast makes it an SDLC workflow primitive.

## 4. Tool-Agnostic Adoption

AutoCast is designed to sit on top of existing tools:

- OpenCode.
- Claude Code.
- Cursor.

This lowers adoption friction. Users do not need to abandon their current workflow.

## 5. Compliance Language

AutoCast explicitly maps security work to OWASP, NIST SSDF, CIS Controls, DevSecOps, and supply-chain review.

Nexu has strong guardrail engineering, but less explicit compliance packaging.

## Market Position

AutoCast has future if positioned as:

```txt
An AI SDLC control-plane for coding agents.
```

It should not be positioned primarily as:

```txt
A new agent runtime framework.
```

The stronger market wedge is:

- Teams already using OpenCode, Claude Code, Cursor, Aider, Cline, or Codex.
- Teams getting inconsistent AI coding output.
- Teams needing repeatable prompts, routing, judges, security gates, and evidence.
- Teams with compliance or secure development requirements.

## Verdict

AutoCast is behind Nexu on deep harness engineering, but ahead on applied development workflow packaging.

The design has future if the next versions add:

- Runtime contract.
- Context policy.
- Sandbox strategy.
- Permissions classifier.
- Eval dataset and scoring.
- Concrete examples for real projects.

The correct path is not to copy Nexu. The correct path is to absorb the runtime lessons and keep AutoCast focused on safe, repeatable, tool-agnostic software delivery.
