# AutoCast Conformance

Conformance defines how closely a project follows the AutoCast framework standard.

The goal is not bureaucracy. The goal is shared language and measurable adoption.

## Levels

| Level | Name | Meaning |
|---|---|---|
| L0 | Prompt Pack | Uses AutoCast prompts or documents informally |
| L1 | AutoCast Structured | Uses task briefs, routes, workflows, and basic judges |
| L2 | AutoCast Compliant | Follows the canonical loop and records evidence for non-trivial work |
| L3 | AutoCast Secure | Applies secure-by-default profiles and security judges for sensitive work |
| L4 | AutoCast Verified | Runs evals, tracks judge quality, and validates route decisions |
| L5 | AutoCast Certified | Independently reviewed, benchmarked, and governed in a repeatable process |

## Current AutoCast Repository Maturity

AutoCast v0.9 candidate is approximately:

```txt
L3: AutoCast Secure
```

It has route definitions, workflows, judges, evidence templates, security baseline, official adapters, framework specification documents, profiles, conformance checklists, security assurance pack, adapter conformance docs, adoption evidence methodology, realistic samples, governance docs, and initial eval suites.

It has partial L4 signals because route, false-positive/false-negative, security assurance, adapter conformance, and adoption evidence evals exist, but it is not yet fully L4/L5 because external validation, broad real-world adoption evidence, judge automation, and independent certification do not exist yet.

## Minimum L2 Requirements

- Use the canonical AutoCast loop.
- Classify work into an official route.
- Use a task brief for non-trivial work.
- Apply the security baseline.
- Use required judges for the selected route.
- Record evidence for completed work.

## Minimum L3 Requirements

- Everything in L2.
- Use `secure` or `critical` profiles when sensitive areas are touched.
- Run security judge for `secure-change` and `critical-change` routes.
- Record residual risk.
- Block secret exposure and high-risk security regressions.

## Minimum L4 Requirements

- Everything in L3.
- Maintain route and judge evals.
- Track false positives and false negatives.
- Run conformance checks in CI or release review.
- Publish benchmark methodology.

## Minimum L5 Requirements

- Everything in L4.
- Independent review or third-party validation.
- Versioned conformance evidence.
- Governance for changes to routes, profiles, and security rules.
