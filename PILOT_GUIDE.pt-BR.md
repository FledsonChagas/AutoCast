# Guia De Piloto AutoCast

Use este guia para rodar um pequeno piloto de adoção AutoCast.

## Objetivo Do Piloto

Medir se AutoCast melhora a qualidade do desenvolvimento assistido por IA em um fluxo real.

## Tamanho Recomendado

- 2 a 4 semanas
- 1 a 3 desenvolvedores
- 10 a 30 tarefas
- mistura de tarefas low-risk, standard, secure e critical

## Setup

1. Escolha adapter oficial: OpenCode, Claude Code ou Cursor.
2. Escolha perfil padrão: `standard` recomendado.
3. Defina quando escalar para `secure` e `critical`.
4. Registre task briefs e evidências.
5. Acompanhe achados dos juízes.
6. Revise atrito de adoção semanalmente.

## Saída

Ao final do piloto, produza:

- contagem de tarefas por rota
- estimativa de acurácia de rota
- falhas de escalada de segurança
- achados de over-scope
- score de completude de evidência
- exemplos de achados úteis dos juízes
- exemplos de atrito desnecessário
- recomendação: adotar, adaptar ou parar

## Regras Anti-Viés

- Inclua falhas.
- Inclua tarefas em que AutoCast foi pesado demais.
- Não pontue apenas tarefas bem-sucedidas.
- Preserve notas brutas quando possível.
