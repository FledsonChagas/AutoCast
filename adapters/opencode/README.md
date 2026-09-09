# OpenCode Adapter

Copy files from `agents/` into your project `.opencode/agent/` or `.opencode/agents/` directory.

After changing OpenCode config, agents, skills, plugins, MCP servers, or permission rules, quit and restart OpenCode. Running sessions keep using already-loaded configuration.

## Suggested Permission Posture

For judge agents:

- `edit: deny`
- `bash: ask`

For builder agents:

- `edit: ask` or project default
- `bash: ask`

Use deny-by-default for destructive commands and external secret directories.
