# AutoCast Installation

AutoCast can be used as documentation-only framework, a project harness, or a measurable local runner.

## Option 1: Project Folder

```bash
git clone https://github.com/FledsonChagas/AutoCast.git autocast
```

## Option 2: Git Submodule

```bash
git submodule add https://github.com/FledsonChagas/AutoCast.git autocast
git submodule update --init --recursive
```

## Option 3: Local Runner

From the AutoCast directory:

```bash
node bin/autocast.mjs init
node bin/autocast.mjs route --task "Add password reset"
node bin/autocast.mjs eval --strict
```

## Tool Adapters

- OpenCode: `adapters/opencode/install.md`
- Claude Code: `adapters/claude-code/install.md`
- Cursor: `adapters/cursor/install.md`
