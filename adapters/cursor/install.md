# Cursor Install Guide

This guide installs AutoCast as project rules for Cursor.

## Install

From your application repository:

```bash
git submodule add https://github.com/FledsonChagas/AutoCast.git autocast
```

Copy the Cursor rule:

```txt
autocast/adapters/cursor/rules/autocast.mdc -> .cursor/rules/autocast.mdc
```

## Usage Pattern

Use this prompt in Cursor:

```md
Use AutoCast for this task.

Follow `.cursor/rules/autocast.mdc`.
Start with `autocast/workflows/autocast-run.md`.
Create a task brief, select a route, apply security gates, implement only the scoped change, and run the required judges before finalizing.

Task:
<describe the task>
```

## Recommended Cursor Behavior

- Use AutoCast for feature, bugfix, refactor, test, security, and review tasks.
- Keep context scoped to the task brief and relevant files.
- Prefer diffs and evidence over broad repository dumps.
- Escalate sensitive work to `secure-change` or `critical-change`.
