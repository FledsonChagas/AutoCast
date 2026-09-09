# Official Adapter Invocation Prompts

Use these prompts as official reference invocations for AutoCast adapters.

## Minimal

```md
Use AutoCast minimal profile for this task.
Classify the route, apply the security baseline, make only the scoped change, and provide a short verification note.

Task:
<task>
```

## Standard

```md
Use AutoCast standard profile for this task.
Create a task brief, select the route, implement only the scoped change, run relevant verification, and use required judges before finalizing.

Task:
<task>
```

## Secure

```md
Use AutoCast secure profile for this task.
Classify security impact, identify trust boundaries, apply the security baseline, use correctness/test/security judges, and record residual risk.

Task:
<task>
```

## Critical

```md
Use AutoCast critical profile for this task.
Create a task brief, threat model, route decision, verification plan, security evidence report, and required judge reports. Do not release without explicit human approval.

Task:
<task>
```
