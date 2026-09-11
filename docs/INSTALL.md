# AutoCast Installation

AutoCast can be used as a framework standard, a project harness, or with optional reference tooling.

The canonical project layout is `.autocast/`.

## Option 1: Canonical Project Layout

```bash
git submodule add https://github.com/FledsonChagas/AutoCast.git .autocast/core
```

Then copy or create project-owned files from:

```txt
.autocast/core/templates/project-layout/.autocast/
```

## Option 2: Clone Instead Of Submodule

```bash
git clone https://github.com/FledsonChagas/AutoCast.git .autocast/core
```

Then copy or create project-owned files from `.autocast/core/templates/project-layout/.autocast/`.

## Option 3: Optional Reference Runner

From the AutoCast directory:

```bash
node bin/autocast.mjs init
node bin/autocast.mjs route --task "Add password reset"
node bin/autocast.mjs eval --strict
```

The runner is optional. It validates reference behavior but is not required to adopt AutoCast.

## Tool Adapters

- OpenCode: `adapters/opencode/install.md`
- Claude Code: `adapters/claude-code/install.md`
- Cursor: `adapters/cursor/install.md`
