# Work Split Patterns

Choose the split that best reduces risk.

## By Phase

```txt
plan -> build -> review -> test -> document
```

Best for general tasks.

## By Contract

```txt
input -> processing -> output -> side effects -> invariants
```

Best for correctness and APIs.

## By Risk

```txt
security -> data -> permissions -> performance -> regression
```

Best for sensitive changes.

## By Layer

```txt
ui -> api -> domain -> persistence -> infra
```

Best for full-stack work.

## By Failure Mode

```txt
happy path -> edge cases -> invalid input -> partial failure -> recovery
```

Best for bugfixes, distributed systems, and integrations.
