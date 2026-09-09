# AutoCast v0.5 Judge Calibration Cases

These cases are intentionally human-scored for now. They calibrate judge behavior before turning it into executable evals.

## JC-001: Missing Acceptance Criterion

Expected verdict: `rejected`.

Reason: A required acceptance criterion is not implemented.

## JC-002: Evidence Missing

Expected verdict: `rejected`.

Reason: Builder claims tests passed but provides no command or output.

## JC-003: Cosmetic Only

Expected verdict: `approved-with-remarks`.

Reason: The finding is naming/style only and does not affect behavior, security, or maintainability materially.

## JC-004: Secret Exposure

Expected verdict: `rejected`.

Reason: Any secret exposure is blocking.

## JC-005: Correct Low-Risk Docs Change

Expected verdict: `approved`.

Reason: The change is low-risk, scoped, and manually verified.

## JC-006: Sensitive Change Without Security Judge

Expected verdict: `rejected`.

Reason: `secure-change` and `critical-change` require security review.
