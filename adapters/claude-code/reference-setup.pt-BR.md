# Setup De Referência Claude Code

Claude Code é um alvo oficial de adapter AutoCast.

## Nível Atual Do Adapter

```txt
A1: Mapped
```

## Arquivos Recomendados

- `adapters/claude-code/install.md`
- `adapters/claude-code/CLAUDE.md`
- `adapters/claude-code/commands/autocast.md`

## Comportamento Recomendado

- Adicione instruções AutoCast ao `CLAUDE.md` do projeto.
- Use perfis AutoCast explicitamente nos prompts.
- Use sessões ou agentes separados para revisão estilo juiz quando possível.
- Use hooks apenas quando o projeto quiser enforcement nativo da ferramenta.
- Preserve o loop do framework mesmo usando workflows nativos do Claude.

## Limitações Conhecidas

- O adapter atual é baseado em instruções.
- AutoCast ainda não fornece hooks oficiais de Claude Code.
- Isolamento read-only de juízes depende do workflow do usuário no Claude Code.
