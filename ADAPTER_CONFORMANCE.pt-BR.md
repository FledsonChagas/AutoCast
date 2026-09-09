# Conformidade De Adapters AutoCast

Adapters são partes oficiais do framework standard AutoCast.

Eles traduzem AutoCast para ferramentas reais de desenvolvimento preservando a metodologia.

## Alvos Oficiais De Adapter

- OpenCode
- Claude Code
- Cursor

## Níveis De Conformidade De Adapter

| Nível | Nome | Significado |
|---|---|---|
| A0 | Documented | Uso do adapter está documentado |
| A1 | Mapped | Rotas, perfis, juízes e baseline de segurança são mapeados para conceitos da ferramenta |
| A2 | Operational | Usuários conseguem rodar AutoCast com prompts/regras/agentes claros na ferramenta |
| A3 | Guarded | Permissões, regras ou hooks nativos da ferramenta são usados quando disponíveis |
| A4 | Verified | Comportamento do adapter é coberto por evals ou exemplos de conformidade |

## Requisitos Mínimos De Adapter Oficial

Um adapter oficial deve documentar:

- padrão de invocação
- perfis suportados
- rotas suportadas
- onde instruções/regras/agentes ficam
- como juízes permanecem separados dos builders
- como trabalho sensível de segurança escala
- como evidência é registrada
- o que a ferramenta não consegue aplicar nativamente

## Status Atual

| Adapter | Nível Atual | Notas |
|---|---|---|
| OpenCode | A2 | Arquivos de agentes e guia de instalação existem; exemplos de permissão ainda podem melhorar |
| Claude Code | A1 | Caminho de instrução de projeto existe; hooks ainda não são assets oficiais do AutoCast |
| Cursor | A1 | Arquivo de regra existe; Cursor tem suporte nativo mais fraco a hooks/enforcement |

## Regra Padrão

Adapters podem diferir na mecânica, mas devem preservar o loop AutoCast:

```txt
pedido -> intake -> task brief -> rota -> workflow -> build -> verificacao -> juiz -> evidencia
```
