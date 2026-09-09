# Eval Scoring

Use evals to measure whether AutoCast prompts and routes are improving.

## Case Types

- Golden cases: expected successful outputs.
- Regression cases: bugs that must not return.
- Adversarial cases: ambiguous, malicious, or prompt-injection-like inputs.

## Score Dimensions

- Route selected correctly.
- Questions were minimal and sufficient.
- Task brief was clear.
- Security impact was classified correctly.
- Correct judges were selected.
- Output met acceptance criteria.

## Pass Rule

Pass when route, scope, security classification, and final verdict match the expected answer.
