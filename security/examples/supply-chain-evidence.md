# Supply Chain Evidence Examples

Use this when a task adds, upgrades, removes, or executes dependencies, plugins, CI actions, containers, MCP servers, or build tools.

## Minimum Evidence

- dependency name
- version or source
- reason for change
- whether it runs install/build scripts
- whether it needs network access
- whether it handles secrets or sensitive data
- known vulnerability review
- license/compliance note when relevant
- rollback plan

## Example Evidence

```txt
dependency: example-package
version: 1.2.3
reason: required to parse existing project format
install scripts: none
network access: none at runtime
secrets access: none
vulnerability review: no known high/critical issue found in available advisories
license: compatible with project policy
rollback: remove package and restore previous parser
```

## Blocking Signals

- unknown source in critical path
- unpinned executable dependency in CI/CD
- install scripts with unclear behavior
- network access without review
- dependency handles secrets without security review
