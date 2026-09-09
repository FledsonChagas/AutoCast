# AutoCast Claude Code Instructions

Use AutoCast before implementation.

## Required Loop

1. Ask minimum intake questions only when the task is unclear.
2. Create or infer a task brief.
3. Select route using `router/decision-matrix.md`.
4. Implement only if the route allows edits.
5. Run relevant verification.
6. Use independent judge prompts before finalizing.
7. Apply `security/security-baseline.md` to every task.

## Security

Never expose secrets. Never widen permissions without explicit need. Escalate auth, authorization, payment, production data, infra, CI/CD, dependency, and cryptography changes to `critical-change`.
