# Cursor Reference Setup

Cursor is an official AutoCast adapter target.

## Current Adapter Level

```txt
A1: Mapped
```

## Recommended Files

- `adapters/cursor/install.md`
- `adapters/cursor/rules/autocast.mdc`

## Recommended Behavior

- Add the AutoCast Cursor rule to `.cursor/rules/`.
- Use explicit AutoCast profile prompts.
- Keep implementation scoped to the task brief.
- Ask for judge-style reviews before finalizing non-trivial work.
- Record evidence manually or with optional reference tooling.

## Known Limitations

- Cursor rules guide behavior but do not provide the same permission boundary as dedicated agent permissions.
- Judge separation is mostly workflow-based.
- Pre-execution security classification is mostly prompt/rule based.
