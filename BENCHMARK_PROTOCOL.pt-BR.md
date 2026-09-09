# Protocolo De Benchmark AutoCast

Use este protocolo para comparar desenvolvimento assistido por IA com e sem AutoCast.

## Objetivo

Medir se AutoCast melhora a qualidade da entrega sem adicionar overhead de processo irracional.

## Baseline

Execute a tarefa com a mesma ferramenta e modelo, mas sem instruções AutoCast.

## Execução Com AutoCast

Execute a mesma tarefa com AutoCast:

- intake
- task brief
- rota
- perfil
- workflow
- verificação
- juízes
- evidência

## Variáveis Controladas

- mesma tarefa
- mesmo estado do codebase
- mesma ferramenta
- mesmo modelo quando possível
- mesmo orçamento de tempo
- mesmos arquivos permitidos
- mesma disponibilidade de comandos de verificação

## Medições

| Métrica | Descrição |
|---|---|
| conclusão | A tarefa terminou? |
| correção | Atendeu aos critérios de aceite? |
| over-scope | Mudou coisas não relacionadas? |
| testes | A verificação melhorou? |
| segurança | Riscos sensíveis foram identificados? |
| evidência | O resultado é revisável? |
| tempo | Quanto tempo levou? |
| atrito | Quanto processo extra foi adicionado? |

## Pontuação

Use nota 0-5 por dimensão.

Não esconda falhas críticas em médias. Um bloqueante de segurança ou correção deve ser reportado separadamente.

## Formato De Relatório

Use:

- `templates/evidence-log.md`
- `templates/run-summary.md`
- `templates/judge-report.md`
- `templates/security-evidence-report.md`

## Amostra Mínima

Para calibragem interna:

- 5 tarefas de baixo risco
- 5 tarefas standard
- 5 tarefas secure-change
- 5 tarefas critical-change

Para claims públicos:

- 30 ou mais tarefas realistas
- resultados brutos disponíveis
- limitações declaradas
- revisão independente preferencial
