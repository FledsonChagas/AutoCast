# Checklist De Release AutoCast

Use este checklist antes de criar tag de release AutoCast.

## Obrigatório

- PR mergeado na `main`.
- Working tree limpo.
- Versão atualizada quando aplicável.
- CHANGELOG atualizado.
- Status do README atualizado.
- ROADMAP atualizado.
- Impacto de segurança revisado.
- Release notes preparadas.

## Checks De Referência

```bash
npm run eval:strict
npm run eval:false-positive
npm run eval:false-negative
npm run eval:security-assurance
npm run eval:adapter-conformance
npm run eval:adoption-evidence
npm run eval:canonical-layout
node --check bin/autocast.mjs
```

## Passos De Release

```bash
git tag -a vX.Y -m "AutoCast vX.Y"
git push origin vX.Y
```

Depois publique a GitHub Release com:

- resumo
- mudanças incluídas
- comandos de validação
- resultados de evals
- limitações
