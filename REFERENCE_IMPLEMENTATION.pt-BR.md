# Implementação De Referência

AutoCast inclui tooling opcional para demonstrar e validar partes do padrão.

O tooling não é o framework.

## Posição Central

```txt
AutoCast Core = framework standard e metodologia
AutoCast Adapters = implementações oficiais para ferramentas de desenvolvimento
AutoCast CLI = validador de referência opcional
```

## CLI De Referência Atual

A CLI atual é `bin/autocast.mjs`.

Ela suporta:

- classificação de rotas
- scoring de evals
- geração de relatórios
- preparação de evidências

## O Que A CLI Não Faz

- Ela não executa tarefas de código.
- Ela não substitui OpenCode, Claude Code ou Cursor.
- Ela não roda comandos shell em nome de um agente de IA.
- Ela não promete aplicar todas as regras AutoCast.
- Ela não é obrigatória para conformidade com AutoCast.

## Por Que Manter

A CLI é útil como validador de referência porque torna partes do padrão mensuráveis.

Ela ajuda a responder:

- O router classificou esta tarefa corretamente?
- Os evals continuam passando?
- Conseguimos gerar um relatório local de evidência?

## Direção Futura

Tooling futuro deve continuar opcional, a menos que valide diretamente a conformidade com o framework standard.
