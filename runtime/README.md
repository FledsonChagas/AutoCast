# AutoCast Runtime Position

AutoCast v0.1 is a control-plane harness, not a full runtime.

It defines how agentic development should be routed, judged, secured, and evidenced. It delegates execution to OpenCode, Claude Code, Cursor, or another coding agent.

## Runtime Components AutoCast Needs To Specify

- Agentic loop budget.
- Exit conditions.
- Tool permission policy.
- Context assembly rules.
- Session evidence log.
- Sandbox expectations.
- Judge invocation points.
- Eval scoring.

## Recommended Architecture

```txt
AutoCast control plane
  -> intake router
  -> workflow selector
  -> tool-specific adapter
  -> coding agent runtime
  -> judges
  -> evidence log
```

## Do Not Build First

Do not start by building a full competing runtime. That would compete with OpenCode, Claude Code, Cursor, Cline, Aider, and Codex.

Build only enough runtime glue to make AutoCast measurable and enforceable.

## Build When Needed

Build a local runner only when these needs appear:

- Repeatable route selection across tools.
- Automatic evidence collection.
- Eval scoring.
- Permission classifier execution.
- Sandbox configuration checks.
