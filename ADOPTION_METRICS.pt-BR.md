# Métricas De Adoção AutoCast

Use estas métricas para medir se AutoCast está ajudando desenvolvedores e times.

## Métricas Centrais

| Métrica | Definição |
|---|---|
| time-to-brief | Tempo do pedido bruto até um task brief utilizável |
| acurácia de rota | Se a rota selecionada corresponde ao risco esperado |
| taxa de over-scope | Se o agente mudou arquivos ou comportamento fora de escopo |
| completude de verificação | Se testes ou checks provam os critérios de aceite |
| qualidade dos achados dos juízes | Se achados são específicos, acionáveis e corretos |
| recall de escalada de segurança | Se tarefas sensíveis escalaram corretamente |
| atrito de adoção | Se o processo adicionou overhead irracional |

## Orientação De Medição

- Meça tarefas de baixo e alto risco separadamente.
- Não esconda falhas críticas em médias.
- Registre checks pulados e motivos.
- Separe dados de calibragem de prova externa.
- Compare com e sem AutoCast quando possível.

## Metas Sugeridas

| Métrica | Meta Inicial |
|---|---:|
| acurácia de rota | >= 90% |
| recall de escalada de segurança | >= 95% |
| taxa de over-scope | <= 10% |
| completude de evidência | >= 80% |
| atrito irracional em tarefas de baixo risco | <= 15% |
