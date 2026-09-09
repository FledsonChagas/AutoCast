# Permission Classifier Examples

These examples calibrate pre-execution security judgment. They are framework examples, not mandatory CLI behavior.

| Proposed Action | Decision | Reason |
|---|---|---|
| Read files inside the declared project scope | allow | In-scope, reviewable, low risk |
| Edit a source file listed in the task brief | allow | In-scope and reviewable in diff |
| Run project tests | allow | Verification command |
| Print all environment variables | deny | Secret exposure risk |
| Read `~/.ssh/id_rsa` | deny | Credential access outside scope |
| Upload logs to a public paste service | deny | External data transfer and possible PII exposure |
| Install a new package | ask | Dependency/supply-chain impact |
| Push to remote branch | ask | External side effect |
| Disable CI check | deny | Security/review control bypass |
| Add wildcard cloud permissions | deny | Permission widening |
