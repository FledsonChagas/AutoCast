<div align="center">

# AutoCast

### O Framework Standard De SDLC Com IA

Torne agentes de código com IA previsíveis, seguros, revisáveis e repetíveis.

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-v0.7%20candidate-orange.svg)](ROADMAP.md)
[![Security](https://img.shields.io/badge/security-OWASP%20%7C%20NIST%20%7C%20CIS-green.svg)](SECURITY.md)
[![Tools](https://img.shields.io/badge/tools-OpenCode%20%7C%20Claude%20Code%20%7C%20Cursor-purple.svg)](#suporte-a-ferramentas)

**Open source | Apache-2.0 | framework standard | metodologia | security-first | tool-agnostic**

[English](README.md)

</div>

## O Que É AutoCast?

AutoCast é um framework standard portátil e uma metodologia de desenvolvimento para executar entrega de software assistida por IA através de um harness controlado.

Ele envolve ferramentas como OpenCode, Claude Code, Cursor e agentes de código similares com um padrão SDLC repetível:

```txt
pedido -> intake -> task brief -> rota -> workflow -> build -> verificacao -> juiz -> evidencia
```

O objetivo é simples: manter a velocidade do desenvolvimento com IA enquanto reduz drift, over-scope, reviews fracos, testes ausentes e surpresas de segurança tarde demais.

## A Regra Do m4g0

AutoCast é a harness do `m4g0`.

Quando um `m4g0` precisa de um feitiço, ele não grita encantamentos aleatórios para três agentes diferentes esperando que o código compile. Ele faz AutoCast: escolhe o feitiço, prende o escopo, invoca os juízes, verifica dependências amaldiçoadas e só então libera a magia.

A piada é também a filosofia do produto.

IA é poderosa. IA sem controle é uma bola de fogo numa taverna de madeira.

## Por Que Existe

Agentes de código com IA já são rápidos. A parte difícil é torná-los confiáveis para entrega real.

Falhas comuns:

- O prompt é vago e o agente preenche lacunas errado.
- O agente muda mais do que o usuário pediu.
- Segurança é revisada depois que a ação arriscada já aconteceu.
- A mesma tarefa tem qualidade diferente em ferramentas diferentes.
- O agente revisa o próprio trabalho e diz que está tudo bem.
- Times não conseguem explicar por que uma mudança gerada por IA foi aceita.

AutoCast resolve isso tratando prompts, juízes, workflows, gates de segurança e evidência como artefatos de engenharia.

## O Que AutoCast Entrega

| Camada | Propósito |
|---|---|
| Intake | Fazer as perguntas mínimas necessárias para executar com segurança |
| Router | Selecionar a rota correta com base em tipo de tarefa e risco |
| Workflows | Padronizar feature, bugfix, refactor, review, teste e segurança |
| Agentes | Separar responsabilidades de planner, builder, reviewer e juízes |
| Juízes | Validar correção, testes, segurança e qualidade de revisão |
| Segurança | Aplicar OWASP, NIST SSDF, CIS Controls, DevSecOps e supply chain |
| Evals | Medir se rotas, juízes e decisões de segurança estão melhorando |
| Adapters | Levar o mesmo padrão para OpenCode, Claude Code e Cursor |
| Tooling De Referência | CLI opcional para roteamento, scoring de evals e evidência |

## Arquitetura Do Framework

```txt
                 pedido do usuario
                        |
                        v
                 AutoCast intake
                        |
                        v
                 contrato task brief
                        |
                        v
             classificador de risco/rota
                        |
      +-----------------+-----------------+
      |                 |                 |
      v                 v                 v
  fast-lane          standard       secure/critical
      |                 |                 |
      v                 v                 v
   builder        planner+builder    planner+builder
      |                 |                 |
      v                 v                 v
  correcao      correcao+testes   correcao+testes+seguranca
      |                 |                 |
      +-----------------+-----------------+
                        |
                        v
                registro de evidencia
```

AutoCast é primeiro um framework standard. Ele não é um runtime completo e não substitui agentes de código existentes.

## Rotas

AutoCast não usa o mesmo processo para corrigir um typo e alterar autenticação.

| Rota | Quando Usar | Validação Exigida |
|---|---|---|
| `fast-lane` | Mudança local de baixo risco | Juiz de correção |
| `standard` | Feature, bugfix, refactor ou teste normal | Juízes de correção e testes |
| `secure-change` | Input externo, dependências, dados, integrações, comportamento sensível | Correção, testes e juiz de segurança |
| `critical-change` | Auth, autorização, pagamentos, produção, infra, CI/CD, cripto, compliance | Planner, builder, reviewer, juízes e aprovação humana |
| `review-only` | Review, diagnóstico, arquitetura, benchmark ou plano | Reviewer ou planner, mais segurança se sensível |

O roteamento começa em `intake/minimum-questions.md` e `router/decision-matrix.md`.

## Agentes

AutoCast separa responsabilidades. Um agente não deve planejar, construir, revisar e certificar a si mesmo.

| Agente | Responsabilidade |
|---|---|
| `router` | Fazer perguntas mínimas e escolher a rota |
| `planner` | Decompor a tarefa com segurança |
| `builder` | Implementar a menor mudança correta |
| `reviewer` | Encontrar bugs, regressões, riscos de manutenção e testes ausentes |
| `judge-correctness` | Validar contra critérios de aceite |
| `judge-tests` | Validar qualidade da verificação |
| `judge-security` | Validar risco de segurança e compliance |

Juízes não constroem. Builders não avaliam o próprio trabalho.

## Como Adotar

Escolha o caminho que combina com seu fluxo.

### Caminho A: Adicionar AutoCast Ao Projeto

```bash
git clone https://github.com/FledsonChagas/AutoCast.git autocast
```

Depois comece por:

```txt
autocast/workflows/autocast-run.md
```

### Caminho B: Usar AutoCast Como Git Submodule

```bash
git submodule add https://github.com/FledsonChagas/AutoCast.git autocast
git submodule update --init --recursive
```

Útil quando você quer manter AutoCast versionado separadamente do código da aplicação.

### Caminho C: Usar AutoCast Como Padrão De IA Do Projeto

Copie ou referencie estes arquivos nas instruções do projeto:

```txt
autocast/SPEC.pt-BR.md
autocast/METHODOLOGY.pt-BR.md
autocast/MANUAL.md
autocast/prompts/autocast-orchestrator.md
autocast/workflows/autocast-run.md
autocast/router/decision-matrix.md
autocast/security/security-baseline.md
```

## Tooling De Referência

AutoCast inclui uma CLI local opcional e sem dependências como validador de referência.

```bash
node bin/autocast.mjs route --task "Adicionar reset de senha"
node bin/autocast.mjs eval --strict
node bin/autocast.mjs report --out .autocast/reports/route-selection-report.md
```

A CLI não substitui seu agente de código e não é obrigatória para conformidade. Ela mede e automatiza comportamento de referência: seleção de rota, scoring de evals e preparação de evidência.

## Uso No Fluxo Dev

Use este prompt com seu agente de código:

```md
Use AutoCast para esta tarefa.

Comece em `autocast/workflows/autocast-run.md`.
Faça apenas perguntas mínimas e bloqueantes.
Crie um task brief.
Selecione a rota usando `autocast/router/decision-matrix.md`.
Aplique `autocast/security/security-baseline.md`.
Implemente somente se a rota permitir mudanças de código.
Rode os juízes exigidos antes de finalizar.

Tarefa:
<descreva a tarefa aqui>
```

## Suporte A Ferramentas

AutoCast foi desenhado para funcionar com ferramentas que devs já usam.

| Ferramenta | Adapter | Status |
|---|---|---|
| OpenCode | `adapters/opencode/` | Adapter oficial inicial |
| Claude Code | `adapters/claude-code/` | Adapter oficial inicial |
| Cursor | `adapters/cursor/` | Adapter oficial inicial |

## Modelo De Segurança

Segurança não é checklist final opcional. Ela faz parte da rota.

AutoCast é seguro por padrão, mas o usuário escolhe o quão rigoroso quer ser: `minimal`, `standard`, `secure` ou `critical`.

Condições bloqueantes incluem:

- Exposição de segredos.
- Enfraquecimento de autorização.
- Mudança insegura de dependência ou supply chain.
- Vazamento de dados sensíveis.
- Ampliação de permissão sem revisão.
- Bypass de CI/CD ou controle de segurança.
- Transferência externa de dados sem aprovação explícita.

Comece por `SECURITY.md`, `PROFILES.pt-BR.md`, `security/security-baseline.md`, `security/permissions-classifier.md` e `security/assurance-model.md`.

## Documentação

| Documento | Propósito |
|---|---|
| `SPEC.md` / `SPEC.pt-BR.md` | Especificação do framework standard AutoCast |
| `METHODOLOGY.md` / `METHODOLOGY.pt-BR.md` | Metodologia de desenvolvimento |
| `CONFORMANCE.md` / `CONFORMANCE.pt-BR.md` | Modelo de conformidade L0-L5 |
| `CONFORMANCE_CHECKLIST.md` / `CONFORMANCE_CHECKLIST.pt-BR.md` | Checklist de conformidade legível por humanos |
| `PROFILES.md` / `PROFILES.pt-BR.md` | Perfis secure-by-default |
| `SECURITY_ASSURANCE.md` / `SECURITY_ASSURANCE.pt-BR.md` | Modelo de security assurance |
| `SECURITY_PROFILE_CHECKLIST.md` / `SECURITY_PROFILE_CHECKLIST.pt-BR.md` | Checklist de perfis de segurança |
| `CRITICAL_CHANGE_THREAT_MODEL.md` / `CRITICAL_CHANGE_THREAT_MODEL.pt-BR.md` | Pacote de threat model para critical-change |
| `ADOPTION.md` / `ADOPTION.pt-BR.md` | Guia de adoção |
| `EVALUATION.md` / `EVALUATION.pt-BR.md` | Metodologia de avaliação |
| `BENCHMARK_PROTOCOL.md` / `BENCHMARK_PROTOCOL.pt-BR.md` | Protocolo de benchmark com/sem AutoCast |
| `JUDGE_CALIBRATION.md` / `JUDGE_CALIBRATION.pt-BR.md` | Guia de calibragem de juízes |
| `ROUTE_EXAMPLES.md` / `ROUTE_EXAMPLES.pt-BR.md` | Exemplos de decisão de rota |
| `REFERENCE_IMPLEMENTATION.md` / `REFERENCE_IMPLEMENTATION.pt-BR.md` | Tooling opcional e CLI como validador de referência |
| `ADAPTERS.md` / `ADAPTERS.pt-BR.md` | Padrão oficial de adapters |
| `ADAPTER_CONFORMANCE.md` / `ADAPTER_CONFORMANCE.pt-BR.md` | Níveis e requisitos de conformidade dos adapters |
| `ADAPTER_LIMITATIONS.md` / `ADAPTER_LIMITATIONS.pt-BR.md` | Matriz de limitações dos adapters por ferramenta |
| `MANIFESTO.md` / `MANIFESTO.pt-BR.md` | Filosofia AutoCast |
| `ROADMAP.md` | Direção de versões e maturidade |
| `SECURITY.md` | Política de segurança |

## Posição De Mercado

A categoria vencedora não é "prompts melhores".

A categoria vencedora é um framework standard para desenvolvimento de software assistido por IA.

AutoCast mira definir esse padrão.

## Status

AutoCast está em evolução. Na `v0.7`, o foco é fortalecer adapters oficiais sem transformar AutoCast em installer obrigatório.

## Licença

Licenciado sob Apache License 2.0. Veja `LICENSE`.

AutoCast é nome de projeto e não deve ser usado para sugerir endosso oficial sem permissão.
