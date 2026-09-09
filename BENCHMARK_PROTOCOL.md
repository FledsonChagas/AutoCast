# AutoCast Benchmark Protocol

Use this protocol to compare AI-assisted development with and without AutoCast.

## Goal

Measure whether AutoCast improves delivery quality without adding unreasonable process overhead.

## Baseline

Run the task with the same tool and model, but without AutoCast instructions.

## AutoCast Run

Run the same task with AutoCast:

- intake
- task brief
- route
- profile
- workflow
- verification
- judges
- evidence

## Controlled Variables

- same task
- same codebase state
- same tool
- same model when possible
- same time budget
- same allowed files
- same verification command availability

## Measurements

| Metric | Description |
|---|---|
| completion | Did the task finish? |
| correctness | Did it meet acceptance criteria? |
| over-scope | Did it change unrelated things? |
| tests | Did verification improve? |
| security | Were sensitive risks identified? |
| evidence | Was the result reviewable? |
| time | How long did the run take? |
| friction | How much extra process was added? |

## Scoring

Use a 0-5 score per dimension.

Do not average away critical failures. A security blocker or correctness blocker should be reported separately.

## Report Format

Use:

- `templates/evidence-log.md`
- `templates/run-summary.md`
- `templates/judge-report.md`
- `templates/security-evidence-report.md`

## Minimum Sample

For internal calibration:

- 5 low-risk tasks
- 5 standard tasks
- 5 secure-change tasks
- 5 critical-change tasks

For public claims:

- 30 or more realistic tasks
- raw results available
- limitations disclosed
- independent review preferred
