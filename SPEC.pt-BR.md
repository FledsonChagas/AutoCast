# Especificação AutoCast

AutoCast é um framework standard e uma metodologia de desenvolvimento para entrega de software assistida por IA.

Ele define como uma pessoa, um agente de código com IA e juízes independentes devem colaborar para produzir mudanças de software com escopo, segurança, verificação e evidência.

## Status

Este documento define a especificação AutoCast Core para a trilha `v0.4` de framework standard.

## Definição Central

AutoCast não é primariamente uma CLI, runtime, IDE ou wrapper de modelo.

AutoCast é um padrão composto por:

- metodologia
- contratos de workflow
- definição de rotas
- responsabilidades de agentes
- responsabilidades de juízes
- perfis de segurança
- requisitos de evidência
- adapters oficiais para ferramentas reais de desenvolvimento
- tooling de referência opcional

## Loop Canônico

```txt
pedido -> intake -> task brief -> rota -> workflow -> build -> verificação -> juiz -> evidência
```

Toda tarefa compatível com AutoCast deve passar por essas fases conceituais, mesmo quando a implementação for leve.

## Artefatos Obrigatórios

Um projeto AutoCast deve definir ou referenciar:

- contexto do projeto
- padrões de engenharia
- template de task brief
- matriz de decisão de rotas
- definições de workflow
- definições de agentes
- rubricas dos juízes
- baseline de segurança
- template de evidência

## Rotas Oficiais

| Rota | Propósito |
|---|---|
| `fast-lane` | Trabalho local de baixo risco com verificação simples |
| `standard` | Feature, bugfix, refactor ou teste normal |
| `secure-change` | Trabalho envolvendo input externo, dados, integrações, dependências ou comportamento sensível de segurança |
| `critical-change` | Auth, autorização, pagamentos, dados de produção, infraestrutura, CI/CD, criptografia ou compliance |
| `review-only` | Revisão, diagnóstico, arquitetura, planejamento, benchmark ou comparação sem implementação |

## Papéis Obrigatórios

| Papel | Responsabilidade |
|---|---|
| Router | Fazer perguntas mínimas e selecionar a rota |
| Planner | Decompor a tarefa quando o escopo não for trivial |
| Builder | Implementar a menor mudança correta |
| Reviewer | Encontrar bugs, regressões, riscos de manutenibilidade e testes ausentes |
| Juiz de Correção | Validar a entrega contra o task brief e critérios de aceite |
| Juiz de Testes | Validar a qualidade da verificação |
| Juiz de Segurança | Validar postura de segurança e risco residual |

Juízes não constroem. Builders não certificam o próprio trabalho.

## Princípio De Segurança

AutoCast é seguro por padrão.

O usuário pode escolher o quão rigoroso o harness deve ser, mas todo perfil começa com um baseline de segurança.

## Adapters Oficiais

Os adapters oficiais do AutoCast são:

- OpenCode
- Claude Code
- Cursor

Adapters fazem parte do padrão porque essas são as ferramentas que desenvolvedores realmente usam.

## Tooling Opcional

A CLI do AutoCast é uma implementação de referência para validação e medição. Ela não é obrigatória para usar a metodologia AutoCast.

A CLI pode ajudar com:

- classificação de rotas
- scoring de evals
- preparação de evidências
- futuros checks de conformidade

Mas um projeto pode estar em conformidade com AutoCast sem executar a CLI.

## Não-Objetivos

- AutoCast não é um runtime hospedado de agentes.
- AutoCast não é uma IDE.
- AutoCast não substitui OpenCode, Claude Code ou Cursor.
- AutoCast não é um catálogo genérico de skills.
- AutoCast não promete segurança perfeita.

## Linguagem Do Padrão

AutoCast não é o único jeito certo de desenvolver com IA. É um jeito certo: com escopo, segurança, juízes e evidência.
