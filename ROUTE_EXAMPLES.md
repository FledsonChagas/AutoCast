# AutoCast Route Decision Examples

Use these examples to calibrate route selection.

| Example | Route | Why |
|---|---|---|
| Fix a typo in README | fast-lane | documentation-only, low risk |
| Change button copy | fast-lane | local UI text change |
| Add dashboard pagination | standard | normal feature with behavior verification |
| Refactor formatter without behavior change | standard | behavior preservation needed |
| Generate unit tests for parser | standard | test work with normal risk |
| Add server-side validation to public form | secure-change | external input trust boundary |
| Add file upload support | secure-change | untrusted file handling |
| Upgrade runtime dependency | secure-change | supply-chain review |
| Fix disabled users accessing app | critical-change | auth and authorization |
| Add password reset | critical-change | tokens and account takeover risk |
| Add CI/CD deploy job | critical-change | deployment and infrastructure |
| Review PR only, no edits | review-only | user blocked implementation |

## Route Rule

When uncertain, choose the lower-friction route only if the security impact is clearly low and verification is simple.

Escalate when the task touches auth, authorization, secrets, personal data, payments, production data, CI/CD, infrastructure, cryptography, or compliance.
