# Layout De Projeto AutoCast

Este documento explica o lado de `.autocast/` que pertence ao projeto.

Use `CANONICAL_LAYOUT.md` para o layout completo. Use este documento para decidir o que pertence ao repositório da aplicação.

## Arquivos Do Projeto

```txt
.autocast/AUTOCAST.md
.autocast/config.yml
.autocast/lock.yml
.autocast/project/*
.autocast/tasks/*
.autocast/evidence/*
.autocast/decisions/*
.autocast/backlog/*
```

## Arquivos Do Framework

```txt
.autocast/core/*
```

Não edite arquivos dentro de `.autocast/core/` para decisões específicas do projeto. Atualize `core/` somente quando atualizar a versão pinada do framework AutoCast.

## Política De Commit

Normalmente commite:

- `.autocast/AUTOCAST.md`
- `.autocast/config.yml`
- `.autocast/lock.yml`
- project brief
- engineering standards
- security profile
- task briefs
- decision records
- backlog by route
- evidência sanitizada

Normalmente não commite:

- logs brutos de produção
- credenciais
- dados de clientes não sanitizados
- arquivos temporários de scratch
- relatórios locais com segredos

## Relação Com Pastas Das Ferramentas

```txt
.autocast/ = framework standard, metodologia, evidência, tarefas, decisões
.opencode/ = configuração runtime específica do OpenCode
.claude/   = configuração runtime específica do Claude Code
.cursor/   = configuração runtime específica do Cursor
```

AutoCast é a camada acima das pastas das ferramentas.
