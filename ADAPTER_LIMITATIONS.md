# AutoCast Adapter Limitations Matrix

Each tool has different native capabilities. AutoCast adapters should be honest about what they can and cannot enforce.

| Capability | OpenCode | Claude Code | Cursor |
|---|---|---|---|
| Project instructions | strong | strong | strong |
| Custom agents | strong | medium/strong depending on setup | limited |
| Read-only judges | strong with agent permissions | depends on setup | limited |
| Tool permissions | strong | strong | limited |
| Hooks | plugin/config dependent | strong | limited |
| Rules files | medium | strong | strong |
| MCP integration | strong | strong | variable |
| Evidence workflow | prompt/template based | prompt/template based | prompt/template based |
| Security pre-execution classifier | possible via permissions/hooks | possible via hooks | mostly prompt/rules based |

## Implication

AutoCast conformance should not require every tool to enforce every rule the same way.

The standard requires preservation of intent:

- route correctly
- scope work
- separate judges
- apply secure-by-default profile
- record evidence
- disclose limitations
