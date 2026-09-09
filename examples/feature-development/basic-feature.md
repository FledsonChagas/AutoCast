# Example: Basic Feature

## Raw Request

Add a settings toggle that lets users enable compact mode in the dashboard.

## Intake Result

- task type: feature
- security impact: no auth, secrets, payments, production data, CI/CD, or infra
- risk: medium
- route: standard

## Task Brief

Implement a compact-mode setting in the dashboard. The change should be scoped to dashboard UI state and user settings persistence already used by the project.

## Verification Plan

- Confirm toggle renders.
- Confirm toggle updates state.
- Confirm persisted setting is reused on reload when the project supports persistence.
- Run existing UI tests or a targeted smoke check.

## Required Judges

- judge-correctness
- judge-tests

## Done Criteria

- Acceptance criteria pass.
- No unrelated UI changes.
- Verification evidence recorded.
