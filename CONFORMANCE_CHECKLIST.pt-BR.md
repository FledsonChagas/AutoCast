# Checklist De Conformidade AutoCast

Use este checklist para avaliar o quanto um projeto segue o framework standard AutoCast.

Isto não é um processo obrigatório de CLI. É um checklist legível por humanos.

## Checklist Do Projeto

| Item | Exigido Para | Status |
|---|---|---|
| Contexto do projeto existe | L1+ | pendente |
| Padrões de engenharia existem | L1+ | pendente |
| Baseline de segurança é referenciado | L1+ | pendente |
| Matriz oficial de rotas é usada | L1+ | pendente |
| Task brief é usado para trabalho não trivial | L2+ | pendente |
| Juízes exigidos são selecionados por rota | L2+ | pendente |
| Evidência é registrada para trabalho não trivial | L2+ | pendente |
| Perfil de segurança é selecionado | L3+ | pendente |
| Juiz de segurança é usado para trabalho sensível | L3+ | pendente |
| Evals existem para rotas e juízes | L4+ | pendente |
| Benchmarks ou evidência de adoção existem | L5 | pendente |

## Checklist Da Tarefa

Antes da implementação:

- objetivo está claro
- escopo está explícito
- fora de escopo está explícito
- rota está selecionada
- perfil está selecionado
- impacto de segurança está classificado
- plano de verificação existe

Antes da conclusão:

- critérios de aceite foram atendidos
- evidência de verificação existe
- juízes exigidos revisaram o trabalho
- achados bloqueantes foram resolvidos
- riscos residuais foram registrados
- gates de segurança passaram para o perfil selecionado

## Pontuação

| Pontuação | Significado |
|---|---|
| 0 | Não existe |
| 1 | Existe informalmente |
| 2 | Existe e é usado consistentemente |
| 3 | Existe, é usado e tem evidência |

Interpretação sugerida:

- 0-8: adoção L0/L1
- 9-18: adoção L2
- 19-27: adoção L3
- 28-33: adoção L4
- candidato L5: exige revisão independente e evidência de adoção além deste checklist
