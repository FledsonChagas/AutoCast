# Sample Case Study: Individual Developer Docs Task

## Evidence Label

sample

## Project Type

Open source framework documentation.

## User Profile

individual developer

## Tool

OpenCode

## AutoCast Profile

minimal

## Task

Fix wording and clarify a README section.

## Baseline Behavior

Not measured. This sample is illustrative.

## AutoCast Behavior

AutoCast routes the task as `fast-lane`, applies the security baseline, keeps scope to docs, and requires a short verification note.

## Route

fast-lane

## Evidence

- docs-only scope
- no secrets touched
- no dependency or config change
- rendered Markdown checked manually

## Judge Findings

Correctness judge should verify that the wording change matches the requested intent and does not alter unrelated sections.

## Security Findings

No security-sensitive code touched.

## Metrics

- time-to-brief: under 2 minutes target
- time-to-completion: not measured
- over-scope: none expected
- verification completeness: manual docs check sufficient
- adoption friction: low

## Limitations

Illustrative sample only. Not external evidence.

## Recommendation

Use AutoCast `minimal` for small docs tasks.
