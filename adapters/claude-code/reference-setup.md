# Claude Code Reference Setup

Claude Code is an official AutoCast adapter target.

## Current Adapter Level

```txt
A1: Mapped
```

## Recommended Files

- `adapters/claude-code/install.md`
- `adapters/claude-code/CLAUDE.md`
- `adapters/claude-code/commands/autocast.md`

## Recommended Behavior

- Add AutoCast instructions to project `CLAUDE.md`.
- Use AutoCast profiles explicitly in prompts.
- Use separate sessions or agents for judge-style review when possible.
- Use hooks only when the project explicitly wants tool-native enforcement.
- Preserve the framework loop even when using Claude-native workflows.

## Known Limitations

- Current adapter is instruction-based.
- AutoCast does not yet ship official Claude Code hooks.
- Read-only judge isolation depends on the user's Claude Code workflow.
