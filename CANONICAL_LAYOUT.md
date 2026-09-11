# Canonical `.autocast/` Layout

AutoCast is adopted inside a project through a canonical `.autocast/` directory.

This directory contains both the pinned AutoCast framework and the project-specific state that uses it. These two concerns must stay separated.

## Core Rule

```txt
.autocast/core/ = the AutoCast framework, cloned or added as a submodule
.autocast/*     = project-specific AutoCast state, configuration, evidence, tasks, and decisions
```

Do not mix project evidence, task briefs, decisions, or backlog files inside `.autocast/core/`.

## Recommended Layout

```txt
.autocast/
  AUTOCAST.md
  config.yml
  lock.yml

  core/
    README.md
    SPEC.md
    METHODOLOGY.md
    CONFORMANCE.md
    PROFILES.md
    ADAPTERS.md
    workflows/
    agents/
    security/
    templates/
    adapters/

  project/
    project-brief.md
    engineering-standards.md
    security-profile.md

  tasks/
    task-brief-*.md

  evidence/
    evidence-log.md
    reviews/
    prs/
    pilots/

  decisions/
    decision-records.md

  backlog/
    backlog-by-route.md
```

## Why `core/` Exists

`core/` keeps the reusable framework separate from local project state.

This makes it possible to:

- pin the AutoCast version used by a project
- update AutoCast without overwriting project evidence
- distinguish official framework files from local adoption files
- use `.autocast/` like `.claude/`, `.opencode/`, or `.cursor/`: a project-local AI standard layer

## Installation Pattern

Recommended submodule form:

```bash
git submodule add https://github.com/FledsonChagas/AutoCast.git .autocast/core
```

Clone form:

```bash
git clone https://github.com/FledsonChagas/AutoCast.git .autocast/core
```

The submodule form is better when the project should explicitly pin and update AutoCast as a dependency.

## Project State

Project-specific files live outside `core/`:

- `.autocast/project/`
- `.autocast/tasks/`
- `.autocast/evidence/`
- `.autocast/decisions/`
- `.autocast/backlog/`

These files belong to the application repository and should usually be committed when they describe project methodology, active tasks, decisions, or evidence worth keeping.

## Local Or Sensitive Evidence

Some evidence may contain operational details. Teams should decide whether to commit it.

Recommended policy:

- commit task briefs, decisions, backlog, and sanitized evidence
- do not commit secrets, production data, credentials, or unsanitized logs
- keep raw local evidence under ignored local paths when needed

## Entrypoint

Every project should include:

```txt
.autocast/AUTOCAST.md
```

This file tells AI agents where the framework lives and where project-specific state lives.
