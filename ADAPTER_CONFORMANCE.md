# AutoCast Adapter Conformance

Adapters are official parts of the AutoCast framework standard.

They translate AutoCast into real developer tools while preserving the methodology.

## Official Adapter Targets

- OpenCode
- Claude Code
- Cursor

## Adapter Conformance Levels

| Level | Name | Meaning |
|---|---|---|
| A0 | Documented | Adapter usage is documented |
| A1 | Mapped | Routes, profiles, judges, and security baseline are mapped to tool concepts |
| A2 | Operational | Users can run AutoCast with clear prompts/rules/agents in the tool |
| A3 | Guarded | Tool-native permissions, rules, or hooks are used where available |
| A4 | Verified | Adapter behavior is covered by evals or conformance examples |

## Minimum Official Adapter Requirements

An official adapter must document:

- invocation pattern
- supported profiles
- supported routes
- where instructions/rules/agents live
- how judges stay separate from builders
- how security-sensitive work escalates
- how evidence is recorded
- what the tool cannot enforce natively

## Current Status

| Adapter | Current Level | Notes |
|---|---|---|
| OpenCode | A2 | Agent files and install guide exist; stronger permission examples still needed |
| Claude Code | A1 | Project instruction path exists; hooks are not yet official AutoCast assets |
| Cursor | A1 | Rule file exists; Cursor has weaker native hook/enforcement support |

## Standard Rule

Adapters may differ in mechanics, but must preserve the AutoCast loop:

```txt
request -> intake -> task brief -> route -> workflow -> build -> verify -> judge -> evidence
```
