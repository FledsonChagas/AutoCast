# AutoCast Adoption Metrics

Use these metrics to measure whether AutoCast is helping developers and teams.

## Core Metrics

| Metric | Definition |
|---|---|
| time-to-brief | Time from raw request to usable task brief |
| route accuracy | Whether the selected route matches expected risk |
| over-scope rate | Whether the agent changed out-of-scope files or behavior |
| verification completeness | Whether tests or checks prove the acceptance criteria |
| judge finding quality | Whether judge findings are specific, actionable, and correct |
| security escalation recall | Whether sensitive tasks escalated correctly |
| adoption friction | Whether the process added unreasonable overhead |

## Measurement Guidance

- Measure low-risk and high-risk tasks separately.
- Do not average away critical failures.
- Record skipped checks and reasons.
- Separate calibration data from external proof.
- Compare with and without AutoCast when possible.

## Suggested Targets

| Metric | Early Target |
|---|---:|
| route accuracy | >= 90% |
| security escalation recall | >= 95% |
| over-scope rate | <= 10% |
| evidence completeness | >= 80% |
| unreasonable friction on low-risk tasks | <= 15% |
