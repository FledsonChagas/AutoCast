# Agentic Loop Contract

This contract defines what AutoCast expects from any coding agent runtime.

## Required Capabilities

- Read project files.
- Search project content.
- Edit scoped files.
- Run approved verification commands.
- Report tool errors clearly.
- Produce a final evidence summary.

## Required Controls

- Maximum turn budget.
- Maximum wall-clock budget.
- Loop detection for repeated identical actions.
- Explicit stop condition.
- Human confirmation for destructive or external actions.
- Security classification before sensitive actions.

## Exit Conditions

The agent should stop when one of these occurs:

- Acceptance criteria are met and verification evidence exists.
- Required information is missing and cannot be inferred safely.
- A blocking security finding is detected.
- Required tests fail and the agent cannot resolve within budget.
- Turn or time budget is exhausted.

## Evidence Contract

Every run must return:

- Task brief.
- Selected route.
- Files changed.
- Commands run.
- Test or verification result.
- Judge verdicts.
- Security notes.
- Residual risks.
