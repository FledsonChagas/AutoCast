# Changelog

## v0.4.0 - Unreleased

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
