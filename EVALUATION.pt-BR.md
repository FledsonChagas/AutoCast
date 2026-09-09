# Metodologia De Avaliação AutoCast

A avaliação AutoCast mede se o framework standard melhora o comportamento do desenvolvimento assistido por IA.

Avaliação não deve ser confundida com prova de correção universal. Evals são ferramentas de calibração.

## O Que Medir

| Dimensão | Pergunta |
|---|---|
| Acurácia de rota | AutoCast escolheu a rota correta? |
| Recall de escalada de segurança | Trabalho sensível foi escalado? |
| Taxa de falso positivo | Trabalho de baixo risco foi escalado demais? |
| Qualidade dos juízes | Juízes encontraram bloqueantes reais? |
| Qualidade da evidência | Outro reviewer conseguiria entender o resultado? |
| Atrito de adoção | O processo desacelerou trabalho de baixo risco sem necessidade? |

## Tipos De Eval Exigidos

## Evals De Rota

Inputs com rota e nível de risco esperados.

## Evals De Falso Positivo

Tarefas de baixo risco ou normais que não devem ser escaladas sem necessidade.

## Evals De Falso Negativo

Tarefas sensíveis que precisam escalar para `secure-change` ou `critical-change`.

## Calibragem De Juízes

Casos em que juízes devem aprovar, aprovar com ressalvas ou rejeitar.

## Benchmarks Com/Sem AutoCast

Compare a mesma tarefa com e sem AutoCast:

- qualidade da saída
- cobertura de testes
- achados de segurança
- taxa de over-scope
- tempo até conclusão
- completude da evidência

## Relato Mínimo

Todo relatório de benchmark deve incluir:

- data
- versão do AutoCast
- ferramenta usada
- modelo usado quando relevante
- conjunto de evals
- método de pontuação
- resultado bruto
- limitações
- fontes conhecidas de viés

## Regra Anti-Overclaim

Não declare prova de mercado com base apenas em evals escritos pelo próprio projeto.

Evals próprios são úteis para proteção contra regressão e calibração. Claims públicos de qualidade exigem tarefas externas, uso realista ou revisão independente.
