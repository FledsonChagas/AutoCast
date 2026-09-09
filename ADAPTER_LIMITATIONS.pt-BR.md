# Matriz De Limitações Dos Adapters AutoCast

Cada ferramenta possui capacidades nativas diferentes. Adapters AutoCast devem ser honestos sobre o que conseguem ou não aplicar.

| Capacidade | OpenCode | Claude Code | Cursor |
|---|---|---|---|
| Instruções de projeto | forte | forte | forte |
| Agentes customizados | forte | médio/forte dependendo do setup | limitado |
| Juízes read-only | forte com permissões de agente | depende do setup | limitado |
| Permissões de ferramenta | forte | forte | limitado |
| Hooks | depende de plugin/config | forte | limitado |
| Arquivos de regras | médio | forte | forte |
| Integração MCP | forte | forte | variável |
| Workflow de evidência | baseado em prompt/template | baseado em prompt/template | baseado em prompt/template |
| Classificador pré-execução de segurança | possível via permissões/hooks | possível via hooks | principalmente via prompts/regras |

## Implicação

Conformidade AutoCast não deve exigir que toda ferramenta aplique toda regra do mesmo jeito.

O padrão exige preservação da intenção:

- rotear corretamente
- limitar escopo
- separar juízes
- aplicar perfil secure-by-default
- registrar evidência
- declarar limitações
