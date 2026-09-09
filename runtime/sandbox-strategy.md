# Sandbox Strategy

AutoCast should prefer sandboxed execution whenever code, shell commands, dependency installation, migrations, or external network calls are involved.

## Local Development Baseline

- Run agents in the project workspace only.
- Deny access to secret directories unless explicitly approved.
- Ask before destructive shell commands.
- Ask before network downloads or uploads.
- Ask before dependency installation.
- Never pass broad cloud credentials into the agent environment.

## Strong Sandbox Baseline

When using Docker or equivalent isolation:

- Non-root user.
- Read-only root filesystem.
- Workspace-scoped mounts.
- No network by default.
- Network allowlist when network is required.
- CPU, memory, process, and disk limits.
- Ephemeral containers.
- No host secrets mounted into the container.

## Critical Work

Use stricter isolation for:

- Auth and authorization work.
- Payment or billing paths.
- Production data access.
- CI/CD and infrastructure changes.
- Dependency or build-chain changes.
- Untrusted code execution.

## Tool Reality

OpenCode, Claude Code, and Cursor each enforce permissions differently. AutoCast should document desired behavior and use each tool's native permission system where available.

Judges are not a substitute for sandboxing. A judge catches issues after the fact. A sandbox limits damage during execution.
