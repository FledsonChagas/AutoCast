# AutoCast Manual

This manual explains how to use and customize AutoCast.

## When To Use

Use AutoCast for software work assisted by AI:

- New features.
- Bug fixes.
- Refactors.
- Test generation.
- Security hardening.
- Code review.
- Architecture decisions.

Use the full harness when risk is medium or high. Use the lightweight route for small local changes.

## Operating Loop

```txt
intake -> route -> plan -> build -> verify -> judge -> fix blockers -> record evidence
```

The normal entrypoint is `workflows/autocast-run.md`. For tools that work better with direct prompts, use `prompts/autocast-orchestrator.md`.

## Step 1: Ask Minimum Questions

Use `intake/minimum-questions.md`. Do not ask everything. Ask only what is needed to route and execute safely.

## Step 2: Create A Task Brief

Fill `templates/task-brief.md`. A task without a clear brief should not enter implementation.

## Step 3: Route The Work

Use `router/decision-matrix.md`.

Default route names:

- `fast-lane`: low-risk local change.
- `standard`: normal feature, bugfix, refactor, or test work.
- `secure-change`: security-sensitive or data-sensitive work.
- `critical-change`: auth, payments, permissions, production data, infra, cryptography, compliance.
- `review-only`: user asked for review, diagnosis, or plan only.

## Step 4: Run Agents

Use agents by responsibility:

- `planner`: decomposes work.
- `builder`: implements the smallest correct change.
- `reviewer`: reviews code and behavior.
- `judge-correctness`: validates against the task brief.
- `judge-tests`: validates tests and verification.
- `judge-security`: validates security and compliance.

Do not let judges edit code. Judges evaluate. Builders change code.

## Step 5: Apply Security Gates

Security gates are required for every route, with stronger checks for higher risk.

Minimum gate:

- No secrets committed.
- No unsafe destructive command without explicit approval.
- No new dependency without reason.
- No widened permissions without reason.
- No unvalidated external input crossing a trust boundary.

High-risk gate:

- Threat model completed.
- OWASP checklist reviewed.
- NIST SSDF evidence recorded.
- CIS control impact considered.
- Dependency and supply-chain risk reviewed.

For pre-execution controls, use `security/permissions-classifier.md` when the selected tool supports permission classification or command approval.

## Step 6: Record Evidence

Use `templates/judge-report.md` and `templates/decision-record.md` when relevant.

Evidence should include:

- Commands run.
- Tests passed or skipped with reason.
- Judge status.
- Security findings.
- Residual risks.

## How To Customize

Edit these files first:

- `autocast.config.example.yml`: default thresholds and routing.
- `context/project-brief.md`: domain and product context.
- `context/engineering-standards.md`: coding and delivery standards.
- `security/security-baseline.md`: organization-specific security rules.
- `rubrics/*.md`: scoring thresholds.

Keep customizations small and versioned.

## Benchmark And Roadmap

Use `benchmarks/nexu-harness-engineering-guide.md` to understand how AutoCast compares to the broader harness engineering market.

Use `roadmap/market-fit.md` to guide product direction and avoid turning AutoCast into an unfocused generic runtime.

Use `ROADMAP.md` and `roadmap/v0.3-development-plan.md` to follow the path from prompt-pack to measurable local harness.

## Local Runner

AutoCast v0.3 includes an optional local runner. See `docs/CLI.md`.

Common commands:

```bash
node bin/autocast.mjs init
node bin/autocast.mjs route --task "Add password reset"
node bin/autocast.mjs eval --strict
```

## Tool-Specific Notes

OpenCode:

- Start with `adapters/opencode/install.md`.
- Copy `adapters/opencode/agents/*.md` into `.opencode/agent/` or `.opencode/agents/`.
- If you add an `opencode.json`, include the official schema and restart OpenCode after config changes.

Claude Code:

- Start with `adapters/claude-code/install.md`.
- Merge `adapters/claude-code/CLAUDE.md` into your project `CLAUDE.md`.

Cursor:

- Start with `adapters/cursor/install.md`.
- Copy `adapters/cursor/rules/autocast.mdc` into `.cursor/rules/`.
