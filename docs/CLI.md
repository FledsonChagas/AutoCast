# AutoCast CLI Reference

AutoCast includes an optional local runner as a reference validator.

The runner does not replace OpenCode, Claude Code, Cursor, or another coding agent. It provides measurable glue for route selection, eval scoring, and evidence generation.

The CLI is not required for AutoCast conformance. AutoCast is a framework standard and methodology first.

## Requirements

- Node.js 18 or newer.
- No npm dependencies are required.

## Commands

## `autocast init`

Creates the canonical project-owned `.autocast/` layout if files are missing.

```bash
node bin/autocast.mjs init
```

Generated files are project-owned AutoCast state. Review them before committing, and do not place project-specific state inside `.autocast/core/`.

## `autocast route`

Classifies a task into an AutoCast route.

```bash
node bin/autocast.mjs route --task "Add password reset to the app"
```

JSON output:

```bash
node bin/autocast.mjs route --task "Fix a typo in README" --json
```

## `autocast eval`

Scores route-selection evals.

```bash
node bin/autocast.mjs eval
```

Strict mode returns a non-zero exit code when targets are missed:

```bash
node bin/autocast.mjs eval --strict
npm run eval:strict
```

## `autocast report`

Writes a local Markdown eval report.

```bash
node bin/autocast.mjs report --out .autocast/reports/route-selection-report.md
```

## Design Constraints

- The runner is optional.
- The runner is dependency-free.
- The runner only automates measurable control-plane behavior.
- The runner does not execute coding tasks, shell commands, or external network actions.
