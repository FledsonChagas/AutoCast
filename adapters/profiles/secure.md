# Adapter Profile: secure

Use for external input, dependencies, data, integrations, or security-sensitive behavior.

## Required

- Everything in `standard`.
- Security impact classification.
- Security judge.
- Supply-chain review when dependencies change.
- Residual risk record.

## Tool Behavior

- Ask before dependency changes, network upload, secret access, or permission widening.
- Prefer read-only security review.
