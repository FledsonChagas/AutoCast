# Supply Chain Review

Use when adding, upgrading, removing, or executing dependencies, plugins, CLIs, containers, GitHub Actions, MCP servers, or build tools.

## Questions

- Is the dependency necessary?
- Is it actively maintained?
- Is it from a trusted source?
- Is the version pinned or controlled?
- Does it execute code during install or build?
- Does it require secrets or elevated permissions?
- Is there a smaller existing alternative?

## Blocking Risks

- Unknown source in critical path.
- Unpinned executable dependency in CI/CD.
- Install scripts with unclear behavior.
- New network access without review.
- License or compliance uncertainty in regulated environments.
