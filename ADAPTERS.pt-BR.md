# Adapters Oficiais AutoCast

AutoCast oferece suporte oficial a adapters para OpenCode, Claude Code e Cursor.

Esses adapters fazem parte do padrão porque desenvolvedores usam essas ferramentas no fluxo diário.

## Princípio Dos Adapters

Adapters traduzem AutoCast para arquivos, prompts, agentes, regras ou instruções específicas de cada ferramenta.

Eles devem preservar:

- rotas
- perfis
- baseline de segurança
- separação entre juízes e builders
- requisitos de evidência
- tooling de referência opcional

## Alvos Oficiais

| Ferramenta | Status | Caminho |
|---|---|---|
| OpenCode | Adapter oficial inicial | `adapters/opencode/` |
| Claude Code | Adapter oficial inicial | `adapters/claude-code/` |
| Cursor | Adapter oficial inicial | `adapters/cursor/` |

## Requisitos De Adapter

Um adapter oficial deve definir:

- como AutoCast é invocado na ferramenta
- onde agentes ou regras vivem
- como juízes permanecem separados dos builders
- como trabalho sensível de segurança é escalado
- como evidências são registradas
- o que a ferramenta não consegue aplicar nativamente

## Limitações Atuais

Os adapters atuais são adapters de referência. Eles documentam o mapeamento oficial, mas ainda não aplicam todas as regras mecanicamente.

Isso é aceitável para a trilha de framework standard.

Versões futuras podem adicionar validadores opcionais para conformidade dos adapters.

## Documentos De Referência

- `ADAPTER_CONFORMANCE.pt-BR.md`
- `ADAPTER_LIMITATIONS.pt-BR.md`
- `adapters/examples/invocation-prompts.pt-BR.md`
- `adapters/opencode/reference-setup.pt-BR.md`
- `adapters/claude-code/reference-setup.pt-BR.md`
- `adapters/cursor/reference-setup.pt-BR.md`
