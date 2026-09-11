# Reference Implementation

AutoCast includes optional tooling to demonstrate and validate parts of the standard.

The tooling is not the framework.

## Core Position

```txt
AutoCast Core = framework standard and methodology
AutoCast Adapters = official implementations for developer tools
AutoCast CLI = optional reference validator
```

## Current Reference CLI

The current CLI is `bin/autocast.mjs`.

It supports:

- canonical `.autocast/` project layout setup
- route classification
- eval scoring
- report generation
- evidence setup

## What The CLI Does Not Do

- It does not execute coding tasks.
- It does not replace OpenCode, Claude Code, or Cursor.
- It does not run shell commands on behalf of an AI agent.
- It does not claim to enforce all AutoCast rules.
- It is not required for AutoCast conformance.

## Why Keep It

The CLI is useful as a reference validator because it makes parts of the standard measurable.

It helps answer:

- Can we create the canonical project-owned `.autocast/` layout?
- Did the router classify this task correctly?
- Do evals still pass?
- Can we generate a local evidence report?

## Future Direction

Future tooling should remain optional unless it directly validates conformance to the framework standard.
