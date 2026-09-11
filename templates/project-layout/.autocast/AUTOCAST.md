# AutoCast Project Entrypoint

This project uses AutoCast as its AI-assisted development framework standard.

## Framework Source

Use `.autocast/core/` as the AutoCast framework source.

Do not edit `.autocast/core/` for project-specific decisions unless updating the pinned AutoCast framework version.

## Project State

Use project-specific AutoCast state from:

- `.autocast/project/`
- `.autocast/tasks/`
- `.autocast/evidence/`
- `.autocast/decisions/`
- `.autocast/backlog/`

## Required Loop

```txt
request -> intake -> task brief -> route -> workflow -> build -> verify -> judge -> evidence
```

## Agent Instruction

When asked to use AutoCast:

1. Read this file first.
2. Read `.autocast/config.yml` and `.autocast/lock.yml`.
3. Use `.autocast/core/` for framework rules, routes, profiles, security, workflows, and templates.
4. Use project files outside `core/` for local context, tasks, evidence, decisions, and backlog.
5. Do not mix framework updates with project task work.
