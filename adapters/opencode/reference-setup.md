# OpenCode Reference Setup

OpenCode is an official AutoCast adapter target.

## Current Adapter Level

```txt
A2: Operational
```

## Recommended Files

- `adapters/opencode/install.md`
- `adapters/opencode/agents/*.md`
- `adapters/opencode/commands/autocast.md`

## Recommended Behavior

- Use `autocast-router` for route selection.
- Use `autocast-builder` only after route and task brief are clear.
- Use read-only judge agents for correctness, tests, and security.
- Use agent permissions to keep judges from editing.
- Ask before destructive shell, dependency install, network upload, secret access, or permission widening.

## Known Limitations

- Full enforcement depends on project OpenCode configuration.
- Users must restart OpenCode after changing config-time files.
- The adapter currently provides reference agents and docs, not a mandatory installer.
