# Adopting AutoCast

AutoCast is incorporated into a development workflow. It does not have to be installed as a mandatory program.

## Who This Is For

- Individual developers who want more reliable AI-assisted work.
- Small teams that need shared AI development discipline.
- Consultancies that want repeatable client delivery.
- Companies that need security, evidence, and governance.

## Adoption Modes

## 1. Lightweight Adoption

Use AutoCast as a prompt and workflow standard.

Start with:

- `README.md`
- `SPEC.md`
- `METHODOLOGY.md`
- `PROFILES.md`
- `workflows/autocast-run.md`
- `security/security-baseline.md`

## 2. Project Standard Adoption

Add AutoCast to the repository using the canonical `.autocast/` layout.

Recommended:

```bash
git submodule add https://github.com/FledsonChagas/AutoCast.git .autocast/core
```

Then create project-owned state outside `core/`:

```txt
.autocast/AUTOCAST.md
.autocast/config.yml
.autocast/lock.yml
.autocast/project/
.autocast/tasks/
.autocast/evidence/
.autocast/decisions/
.autocast/backlog/
```

Use the starter template from:

```txt
.autocast/core/templates/project-layout/.autocast/
```

Require AI-assisted tasks to produce:

- task brief
- route
- verification evidence
- judge verdicts for non-trivial work

## 3. Tool Adapter Adoption

Use the official adapter docs for:

- OpenCode
- Claude Code
- Cursor

Adapters are official because these tools are part of the intended AutoCast standard.

## 4. Reference Tooling Adoption

Use the optional CLI when you want local validation or measurement.

Example:

```bash
node bin/autocast.mjs route --task "Add password reset"
node bin/autocast.mjs eval --strict
```

## Recommended Rollout

1. Start with `standard` profile.
2. Use `secure` for data, dependencies, integrations, or external input.
3. Use `critical` for auth, payments, production, infra, CI/CD, cryptography, and compliance.
4. Add evidence requirements after the team understands routes.
5. Add evals after recurring task types are known.
