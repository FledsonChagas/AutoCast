# Changelog

## v0.7.0 - Unreleased

### Added

- Adapter conformance standard in English and Portuguese.
- Adapter limitations matrix in English and Portuguese.
- Official adapter profile references for `minimal`, `standard`, `secure`, and `critical`.
- Official adapter invocation prompt examples in English and Portuguese.
- Reference setup docs for OpenCode, Claude Code, and Cursor in English and Portuguese.
- v0.7 adapter conformance route calibration eval suite.
- v0.7 adapter conformance benchmark report.
- npm script for adapter conformance evals.

### Changed

- Reference router now recognizes `without editing files` as review-only intent.
- Config now targets v0.7.0 and includes the v0.7 adapter conformance eval suite.

## v0.6.0 - 2026-09-09

### Added

- Security Assurance Pack in English and Portuguese.
- Security profile checklist in English and Portuguese.
- Critical-change threat model pack in English and Portuguese.
- Permission classifier examples in English and Portuguese.
- Supply-chain evidence examples in English and Portuguese.
- PR security evidence examples in English and Portuguese.
- Security standards crosswalk for OWASP, NIST SSDF, CIS Controls, and DevSecOps.
- v0.6 security assurance route calibration eval suite.
- v0.6 security assurance benchmark report.
- npm script for security assurance evals.

### Changed

- Reference router now treats security-control bypasses as critical changes.
- Reference router gives review-only intent precedence when the user explicitly blocks edits.
- Config now targets v0.6.0 and includes the v0.6 security assurance eval suite.

## v0.5.0 - 2026-09-09

### Added

- Conformance checklist in English and Portuguese.
- Evaluation methodology in English and Portuguese.
- With/without AutoCast benchmark protocol in English and Portuguese.
- Judge calibration guide in English and Portuguese.
- Route decision examples in English and Portuguese.
- False-positive and false-negative route calibration eval suites.
- Optional CI template for AutoCast reference checks.
- npm scripts for v0.5 false-positive and false-negative evals.

### Changed

- Improved reference router handling for documentation-only changes and review-only wording.
- Config now targets v0.5.0 and lists supplemental v0.5 eval suites.

## v0.4.0 - 2026-09-09

### Added

- Framework specification documents in English and Portuguese.
- AutoCast methodology documents in English and Portuguese.
- Conformance levels from L0 to L5.
- Secure-by-default profiles with user-selectable rigor.
- Adoption guides for individuals, small teams, consultancies, and companies.
- Official adapter standard for OpenCode, Claude Code, and Cursor.
- Reference implementation documents clarifying that the CLI is optional tooling.
- Manifesto documents with a soft, non-dogmatic product philosophy.
- Portuguese README mirror.
- Post-v0.3 roadmap reframed around framework standard maturity.

### Changed

- Reframed AutoCast as a framework standard and development methodology first.
- Repositioned the CLI as a reference validator, not the center of the product.
- Revised competitive benchmark language to avoid treating install/doctor/uninstall as mandatory core requirements.

## v0.3.0 - 2026-09-09

### Added

- Dependency-free local runner with `init`, `route`, `eval`, and `report` commands.
- Structured v0.3 route-selection eval suite with 60 cases.
- JSON schemas for route decisions and eval suites.
- CLI, eval, evidence, install, and versioning documentation.
- v0.3 benchmark report stub for local route-selection scoring.

### Changed

- Package metadata and config now target v0.3.0.
- README and roadmap now describe the measurable local harness milestone.

## v0.2.0 - 2026-09-09

### Added

- Install guides for OpenCode, Claude Code, and Cursor.
- Expanded OpenCode agent pack for router, planner, builder, reviewer, correctness judge, test judge, and security judge.
- Permission classifier prompt for pre-execution action review.
- Evidence log, run summary, and security evidence templates.
- Example AutoCast runs for feature development, bugfix, code review, and security hardening.
- v0.2 eval packs for route selection, judge calibration, and security review.

### Changed

- README now points users to tool-specific installation paths and v0.2 evidence artifacts.
- Manual now references adapter install guides.

## v0.1.0 - 2026-09-09

### Added

- Initial AutoCast framework standard.
- README, manual, roadmap, security policy, and Apache-2.0 license.
- Intake, routing, workflows, agents, judges, rubrics, templates, and security baseline.
- Initial adapters for OpenCode, Claude Code, and Cursor.
- Initial benchmark against the Nexu Harness Engineering Guide.
