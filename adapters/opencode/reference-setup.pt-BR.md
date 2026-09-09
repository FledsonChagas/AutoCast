# Setup De Referência OpenCode

OpenCode é um alvo oficial de adapter AutoCast.

## Nível Atual Do Adapter

```txt
A2: Operational
```

## Arquivos Recomendados

- `adapters/opencode/install.md`
- `adapters/opencode/agents/*.md`
- `adapters/opencode/commands/autocast.md`

## Comportamento Recomendado

- Use `autocast-router` para seleção de rota.
- Use `autocast-builder` apenas depois que rota e task brief estiverem claros.
- Use agentes juízes read-only para correção, testes e segurança.
- Use permissões de agente para impedir que juízes editem.
- Pergunte antes de shell destrutivo, instalação de dependência, upload de rede, acesso a segredo ou ampliação de permissão.

## Limitações Conhecidas

- Enforcement completo depende da configuração OpenCode do projeto.
- Usuários precisam reiniciar OpenCode depois de mudar arquivos carregados em tempo de config.
- O adapter atualmente fornece agentes e docs de referência, não um installer obrigatório.
