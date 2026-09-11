# AutoCast Project Layout

This document explains the project-owned side of `.autocast/`.

Use `CANONICAL_LAYOUT.md` for the full layout. Use this document when deciding what belongs to the application repository.

## Project-Owned Files

```txt
.autocast/AUTOCAST.md
.autocast/config.yml
.autocast/lock.yml
.autocast/project/*
.autocast/tasks/*
.autocast/evidence/*
.autocast/decisions/*
.autocast/backlog/*
```

## Framework-Owned Files

```txt
.autocast/core/*
```

Do not edit files under `.autocast/core/` for project-specific decisions. Update `core/` only when updating the pinned AutoCast framework version.

## Commit Policy

Usually commit:

- `.autocast/AUTOCAST.md`
- `.autocast/config.yml`
- `.autocast/lock.yml`
- project brief
- engineering standards
- security profile
- task briefs
- decision records
- backlog by route
- sanitized evidence

Usually do not commit:

- raw production logs
- credentials
- unsanitized customer data
- temporary scratch files
- local-only reports with secrets

## Relationship To Tool Folders

```txt
.autocast/ = framework standard, methodology, evidence, tasks, decisions
.opencode/ = OpenCode-specific runtime configuration
.claude/   = Claude Code-specific runtime configuration
.cursor/   = Cursor-specific runtime configuration
```

AutoCast is the layer above the tool folders.
