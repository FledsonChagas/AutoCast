# Example: Review Only

## Raw Request

Review this pull request for production risks. Do not edit code.

## Intake Result

- task type: review
- risk: depends on diff
- route: review-only

## Review Scope

Review the diff against intended behavior, correctness risks, regression risk, test coverage, and security impact.

## Required Agents

- reviewer
- judge-security if the diff touches sensitive areas

## Output Format

- blocking findings
- non-blocking findings
- missing tests
- security concerns
- final recommendation

## Done Criteria

- Findings are ordered by severity.
- Findings include evidence and file references when possible.
- No code edits are made.
