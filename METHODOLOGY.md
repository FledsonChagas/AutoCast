# AutoCast Methodology

AutoCast is a practical methodology for AI-assisted development.

It exists to help individuals, small teams, consultancies, and companies use AI coding agents without losing engineering discipline.

## Philosophy

AutoCast assumes that AI agents are powerful but unreliable when scope, context, verification, and security are unclear.

The methodology reduces error surface by enforcing:

- minimum intake
- explicit task brief
- risk-based route selection
- scoped implementation
- independent judging
- security baseline
- evidence record

## The Working Method

## 1. Intake

Ask only what changes routing, scope, safety, or verification.

## 2. Task Brief

Convert the user request into a clear contract:

- objective
- scope
- out of scope
- acceptance criteria
- verification plan
- security impact

## 3. Route

Choose the route based on task type and risk.

Do not use the same process for a typo and an authentication change.

## 4. Build

The builder implements the smallest correct change.

No broad refactors. No dependency additions without justification. No permission widening without review.

## 5. Verify

Verification should prove behavior, not implementation trivia.

## 6. Judge

Judges evaluate independently.

Required judges depend on the route.

## 7. Evidence

Record what changed, what was tested, what judges found, and what risk remains.

## Secure By Default

Every AutoCast profile includes security. The user chooses the strictness level, not whether security exists.

## Guidance, Not Dogma

AutoCast is opinionated but not absolute.

It provides one right way to run AI-assisted development. Teams may adapt it when they preserve the core loop, route logic, security posture, and evidence discipline.
