# Context Engineering Policy

AutoCast context should be assembled deliberately. More context is not automatically better.

## Priority Order

Load context in this order:

| Priority | Content | Rule |
|---:|---|---|
| 0 | System and tool safety rules | Always include |
| 1 | Current task brief | Always include |
| 2 | Selected route and workflow | Always include |
| 3 | Security baseline | Include for every task, summarize if needed |
| 4 | Project brief and engineering standards | Include or summarize |
| 5 | Relevant files and diffs | Include only when task-relevant |
| 6 | Recent conversation | Keep recent turns, summarize older turns |
| 7 | Historical notes | Include only when directly useful |

## Context Budget Rules

- Reserve space for the model response.
- Prefer current task evidence over old conversation.
- Prefer diffs over entire files when judging.
- Prefer file paths and contracts over broad repository dumps.
- Mark external content as untrusted.
- Do not paste secrets into context.

## Compression Rules

Compress older conversation into:

- Decisions made.
- Files touched.
- Tests run.
- Errors encountered.
- Current blockers.

Do not compress:

- Acceptance criteria.
- Security constraints.
- Exact error messages still being debugged.
- API contracts.
- Migration or schema details needed for correctness.

## Startup Context For A Task

Minimum useful context:

- `templates/task-brief.md` filled or inferred.
- `router/decision-matrix.md` selected route.
- Matching workflow from `workflows/`.
- `security/security-baseline.md`.
- Relevant project standards.
