# Workflow: AutoCast Run

This is the default entrypoint for every task.

## Steps

1. Read the raw user request.
2. Use `intake/minimum-questions.md` to ask only blocking questions.
3. Fill `templates/task-brief.md`.
4. Use `router/decision-matrix.md` to select the route.
5. Use `router/patterns.md` to choose the split method.
6. Run the selected workflow.
7. Use required judges from `agents/`.
8. Apply `security/security-baseline.md`.
9. Record judge reports and decisions when needed.

## Route Output Contract

Every run must produce:

- route
- risk level
- task brief
- required agents
- required judges
- verification plan
- security gates
- done criteria
