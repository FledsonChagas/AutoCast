# OpenCode Install Guide

This guide installs AutoCast as a project-level harness for OpenCode.

## Goal

Make OpenCode follow AutoCast's SDLC control-plane:

```txt
intake -> route -> workflow -> build -> verify -> judge -> evidence
```

## Install

From your application repository:

```bash
git submodule add https://github.com/FledsonChagas/AutoCast.git autocast
```

Create the OpenCode agent directory if it does not exist:

```txt
.opencode/agent/
```

Copy AutoCast agents:

```txt
autocast/adapters/opencode/agents/*.md -> .opencode/agent/
```

## Recommended Agents

Use these agents by responsibility:

| Agent | Mode | Permission Intent |
|---|---|---|
| `autocast-router` | subagent | read-only routing |
| `autocast-planner` | subagent | read-only planning |
| `autocast-builder` | subagent | scoped edits and approved commands |
| `autocast-reviewer` | subagent | read-only review |
| `autocast-judge-correctness` | subagent | read-only judging |
| `autocast-judge-tests` | subagent | read-only test-quality judging |
| `autocast-judge-security` | subagent | read-only security judging |

## Usage Prompt

```md
Use AutoCast for this task.

Start with `autocast/workflows/autocast-run.md`.
Ask only blocking intake questions.
Select the route from `autocast/router/decision-matrix.md`.
Apply `autocast/security/security-baseline.md`.
Use the required AutoCast judges before finalizing.

Task:
<describe the task>
```

## Safety Notes

- Judges should deny edits.
- Builder should ask before shell commands and dependency changes.
- Restart OpenCode after changing agents, skills, plugins, MCP servers, permission rules, or config files.
- If you add `opencode.json`, validate it against `https://opencode.ai/config.json`.
