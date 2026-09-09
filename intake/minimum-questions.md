# Minimum Intake Questions

Ask only what is needed to route the task.

## Required

1. What outcome do you want?
2. Is this a feature, bugfix, refactor, review, test work, security work, or architecture decision?
3. What files, modules, screens, APIs, or flows are in scope?
4. What must not be changed?
5. How should success be verified?
6. Does this touch auth, permissions, secrets, payments, personal data, infrastructure, CI/CD, or production data?

## Ask Only If Needed

1. What edge cases matter most?
2. Is backward compatibility required?
3. Are there compliance requirements?
4. Should the agent only plan/review, or can it edit code?
5. What deadline or depth level should be used: fast, standard, strict, or critical?

## Output

Convert the answers into `templates/task-brief.md`.
