# Setup De Referência Cursor

Cursor é um alvo oficial de adapter AutoCast.

## Nível Atual Do Adapter

```txt
A1: Mapped
```

## Arquivos Recomendados

- `adapters/cursor/install.md`
- `adapters/cursor/rules/autocast.mdc`

## Comportamento Recomendado

- Adicione a regra AutoCast Cursor em `.cursor/rules/`.
- Use prompts explícitos com perfil AutoCast.
- Mantenha implementação limitada ao task brief.
- Peça reviews estilo juiz antes de finalizar trabalho não trivial.
- Registre evidência manualmente ou com tooling de referência opcional.

## Limitações Conhecidas

- Regras do Cursor guiam comportamento, mas não fornecem a mesma fronteira de permissão de agentes dedicados.
- Separação de juízes é principalmente baseada em workflow.
- Classificação de segurança pré-execução é principalmente baseada em prompt/regra.
