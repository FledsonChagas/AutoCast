# AutoCast Release Checklist

Use this checklist before tagging an AutoCast release.

## Required

- PR merged to `main`.
- Working tree clean.
- Version updated where applicable.
- CHANGELOG updated.
- README status updated.
- ROADMAP updated.
- Security impact reviewed.
- Release notes prepared.

## Reference Checks

```bash
npm run eval:strict
npm run eval:false-positive
npm run eval:false-negative
npm run eval:security-assurance
npm run eval:adapter-conformance
npm run eval:adoption-evidence
node --check bin/autocast.mjs
```

## Release Steps

```bash
git tag -a vX.Y -m "AutoCast vX.Y"
git push origin vX.Y
```

Then publish the GitHub Release with:

- summary
- included changes
- validation commands
- eval results
- limitations
