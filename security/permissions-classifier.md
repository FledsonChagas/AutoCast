# Permissions Classifier Standard

AutoCast uses judges after work is produced. For dangerous actions, AutoCast should also use a pre-execution permission classifier when the tool supports it.

## Purpose

Prevent risky actions before they run.

## Classifier Scope

Classify actions that can affect the world outside the immediate project diff:

- Shell commands.
- Network requests.
- External API calls.
- File operations outside the project.
- Secret or credential access.
- Dependency installation.
- Git push, force push, branch deletion, or release operations.
- CI/CD, infrastructure, or cloud operations.

## Three-Tier Flow

## Tier 1: Allowlisted Safe Actions

Examples:

- Read files inside the project.
- Search files inside the project.
- Inspect git status or diff.

Action: allow and log.

## Tier 2: In-Project Edits

Examples:

- Modify source files in declared scope.
- Add tests in declared scope.

Action: allow if covered by the task brief and reviewable in diff.

## Tier 3: Classified Risky Actions

Examples:

- Shell commands with destructive potential.
- Network upload or download.
- External service calls.
- Secret reads.
- Permission changes.
- Dependency or CI changes.

Action: classify before execution. Ask or block when uncertain.

## Block Rules

Block by default when an action:

- Destroys data outside explicit scope.
- Exfiltrates files, secrets, logs, or personal data.
- Reads credentials without direct user instruction.
- Weakens auth, authorization, tests, CI, logging, or security controls.
- Sends data to an inferred or unapproved destination.
- Disables review, hooks, scanners, or safeguards.
- Uses broad permissions such as `chmod 777` or admin-level cloud roles.
- Executes downloaded code without review.

## Classifier Design

- Use a separate judge/classifier context from the builder.
- Do not include the builder's private reasoning as justification.
- Include user request, task brief, tool call, relevant policy, and trust boundary.
- Prefer allow, ask, deny as outputs.
- Log every deny and every human override.

## Relationship To Security Judge

The permissions classifier blocks dangerous actions before execution.

The security judge reviews the final change before completion.

Both are required for high-risk and critical work.
