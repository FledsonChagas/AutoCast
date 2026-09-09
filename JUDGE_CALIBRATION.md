# AutoCast Judge Calibration

Judge calibration keeps independent evaluation from becoming subjective opinion.

## Judge Rule

Judges evaluate against task brief, route, profile, acceptance criteria, verification evidence, and security baseline.

Judges do not build.

## Verdicts

| Verdict | Meaning |
|---|---|
| `approved` | No blocking issue found |
| `approved-with-remarks` | Non-blocking issue exists, work may proceed |
| `rejected` | Blocking issue exists |

## Calibration Cases

| Case | Expected Verdict |
|---|---|
| Acceptance criterion missing | rejected |
| Required tests fail | rejected |
| No evidence for important behavior | rejected |
| Secret exposed | rejected |
| Security-sensitive work without security judge | rejected |
| Cosmetic naming concern only | approved-with-remarks |
| Low-risk docs change with manual verification | approved |

## Judge Quality Signals

Good judge reports include:

- specific finding
- severity
- evidence
- file or artifact reference when available
- clear required fix
- residual risk

Weak judge reports include:

- vague praise
- unsupported claims
- broad style preferences
- missing severity
- no evidence

## Calibration Process

1. Run judges on known-good and known-bad examples.
2. Record false positives and false negatives.
3. Improve rubrics, not just prompts.
4. Re-run old cases after changing judge instructions.
5. Keep examples versioned.
