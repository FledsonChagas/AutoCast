# Claude Code Install Guide

This guide installs AutoCast as project instructions for Claude Code.

## Install

From your application repository:

```bash
git submodule add https://github.com/FledsonChagas/AutoCast.git autocast
```

Merge this file into your project `CLAUDE.md`:

```txt
autocast/adapters/claude-code/CLAUDE.md
```

## Recommended Project Instruction

```md
Use AutoCast for AI-assisted software development.

Before coding:
- Read `autocast/workflows/autocast-run.md`.
- Ask only blocking intake questions.
- Produce a task brief.
- Select route using `autocast/router/decision-matrix.md`.
- Apply `autocast/security/security-baseline.md`.

Before finalizing:
- Run relevant verification.
- Use correctness, test, and security judge prompts when required.
- Record evidence and residual risk.
```

## Usage Pattern

Use this request format:

```md
Run this task through AutoCast.

Task:
<task>

Expected output:
- task brief
- selected route
- implementation summary if edits are allowed
- verification evidence
- judge verdicts
- residual risks
```

## Security Notes

- Treat auth, authorization, secrets, payments, production data, infrastructure, CI/CD, cryptography, and dependency execution as `critical-change`.
- Never expose environment variables or credential files.
- Ask before destructive shell commands or network uploads.
