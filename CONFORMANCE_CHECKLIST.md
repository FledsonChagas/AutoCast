# AutoCast Conformance Checklist

Use this checklist to evaluate how closely a project follows the AutoCast framework standard.

This is not a mandatory CLI process. It is a human-readable standard checklist.

## Project-Level Checklist

| Item | Required For | Status |
|---|---|---|
| Project context exists | L1+ | pending |
| Engineering standards exist | L1+ | pending |
| Security baseline is referenced | L1+ | pending |
| Official route matrix is used | L1+ | pending |
| Task brief is used for non-trivial work | L2+ | pending |
| Required judges are selected by route | L2+ | pending |
| Evidence is recorded for non-trivial work | L2+ | pending |
| Security profile is selected | L3+ | pending |
| Security judge is used for sensitive work | L3+ | pending |
| Evals exist for route and judge behavior | L4+ | pending |
| Benchmarks or adoption evidence exist | L5 | pending |

## Task-Level Checklist

Before implementation:

- objective is clear
- scope is explicit
- out-of-scope is explicit
- route is selected
- profile is selected
- security impact is classified
- verification plan exists

Before completion:

- acceptance criteria are met
- verification evidence exists
- required judges reviewed the work
- blocking findings are resolved
- residual risks are recorded
- security gates passed for the selected profile

## Scoring

| Score | Meaning |
|---|---|
| 0 | Not present |
| 1 | Present but informal |
| 2 | Present and consistently used |
| 3 | Present, used, and evidenced |

Suggested interpretation:

- 0-8: L0/L1 adoption
- 9-18: L2 adoption
- 19-27: L3 adoption
- 28-33: L4 adoption
- L5 candidate: requires independent review and adoption evidence beyond this checklist
