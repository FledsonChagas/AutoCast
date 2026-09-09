# Official AutoCast Adapters

AutoCast officially supports adapters for OpenCode, Claude Code, and Cursor.

These adapters are part of the standard because real developers use these tools in daily workflows.

## Adapter Principle

Adapters translate AutoCast into tool-specific files, prompts, agents, rules, or instructions.

They should preserve:

- routes
- profiles
- security baseline
- judge separation
- evidence requirements
- optional reference tooling

## Official Targets

| Tool | Status | Path |
|---|---|---|
| OpenCode | Official initial adapter | `adapters/opencode/` |
| Claude Code | Official initial adapter | `adapters/claude-code/` |
| Cursor | Official initial adapter | `adapters/cursor/` |

## Adapter Requirements

An official adapter should define:

- how AutoCast is invoked in the tool
- where agents or rules live
- how judges remain separate from builders
- how security-sensitive work is escalated
- how evidence is recorded
- what the tool cannot enforce natively

## Current Limitations

The current adapters are reference adapters. They document the official mapping but do not fully enforce all rules mechanically.

That is acceptable for the framework-standard track.

Future versions may add optional validators for adapter conformance.

## Reference Documents

- `ADAPTER_CONFORMANCE.md`
- `ADAPTER_LIMITATIONS.md`
- `adapters/examples/invocation-prompts.md`
- `adapters/opencode/reference-setup.md`
- `adapters/claude-code/reference-setup.md`
- `adapters/cursor/reference-setup.md`
