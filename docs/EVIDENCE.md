# AutoCast Evidence

Evidence is the audit layer of AutoCast.

Every non-trivial AI-assisted task should produce enough evidence to answer:

- What was requested?
- What route was selected?
- What changed?
- How was it verified?
- Which judges approved it?
- What security risks remain?

## Templates

- `templates/evidence-log.md`
- `templates/run-summary.md`
- `templates/security-evidence-report.md`
- `templates/judge-report.md`
- `templates/decision-record.md`

## Local Working Directory

Use `.autocast/` for local evidence while developing.

```txt
.autocast/
  task-brief.md
  evidence-log.md
  run-summary.md
  security-evidence-report.md
  reports/
```

The `.autocast/` directory is ignored by git by default. Commit evidence only when your team explicitly wants it in the repo.

## Release Evidence

Release evidence should include:

- PR link.
- Commit hash.
- Eval output.
- Security notes.
- Residual risks.
