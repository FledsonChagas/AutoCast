# Calibragem De Juízes AutoCast

Calibragem de juízes evita que avaliação independente vire opinião subjetiva.

## Regra Dos Juízes

Juízes avaliam contra task brief, rota, perfil, critérios de aceite, evidência de verificação e baseline de segurança.

Juízes não constroem.

## Vereditos

| Veredito | Significado |
|---|---|
| `approved` | Nenhum bloqueante encontrado |
| `approved-with-remarks` | Existe achado não bloqueante, trabalho pode seguir |
| `rejected` | Existe achado bloqueante |

## Casos De Calibragem

| Caso | Veredito Esperado |
|---|---|
| Critério de aceite ausente | rejected |
| Testes exigidos falham | rejected |
| Sem evidência para comportamento importante | rejected |
| Segredo exposto | rejected |
| Trabalho sensível sem juiz de segurança | rejected |
| Apenas preocupação cosmética com nome | approved-with-remarks |
| Mudança de docs de baixo risco com verificação manual | approved |

## Sinais De Qualidade Do Juiz

Bons relatórios de juiz incluem:

- achado específico
- severidade
- evidência
- referência a arquivo ou artefato quando disponível
- correção exigida clara
- risco residual

Relatórios fracos incluem:

- elogio vago
- claims sem suporte
- preferências amplas de estilo
- severidade ausente
- nenhuma evidência

## Processo De Calibragem

1. Rode juízes em exemplos bons e ruins conhecidos.
2. Registre falsos positivos e falsos negativos.
3. Melhore rubricas, não só prompts.
4. Rode casos antigos novamente depois de mudar instruções dos juízes.
5. Mantenha exemplos versionados.
