# AutoCast v0.6 Security Assurance Report

Validated locally on 2026-09-09.

## Commands

```bash
npm run eval:strict
npm run eval:false-positive
npm run eval:false-negative
node bin/autocast.mjs eval evals/v0.6/security-assurance.json --strict
node --check bin/autocast.mjs
```

## Scope

v0.6 strengthens AutoCast as a security-first framework standard with an assurance pack, security profile checklist, critical-change threat model, standards crosswalk, and security evidence examples.

## Expected Result

All route and security assurance calibration suites should pass.

## Limitations

- The v0.6 eval remains a self-authored calibration suite.
- This report is not third-party security certification.
- Compliance mapping is engineering guidance, not legal advice.
