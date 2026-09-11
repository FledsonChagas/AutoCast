# Contribuindo Com AutoCast

AutoCast é um framework standard e metodologia para entrega de software assistida por IA.

Contribuições devem fortalecer o padrão sem transformar AutoCast em runtime obrigatório.

## Princípios De Contribuição

- Preserve o posicionamento framework-first, tooling-second.
- Mantenha CLI como opcional, a menos que esteja explicitamente marcada como tooling de referência.
- Não exagere claims de eval ou adoção.
- Mantenha segurança secure-by-default.
- Mantenha docs bilíngues ao alterar material central do padrão.
- Prefira mudanças pequenas e revisáveis.

## Boas Contribuições

- Linguagem mais clara de especificação.
- Melhores exemplos de rota.
- Melhores casos de calibragem de juízes.
- Melhorias de security assurance.
- Melhorias em adapters oficiais para OpenCode, Claude Code ou Cursor.
- Evidência real de adoção com limitações declaradas.
- Evals que detectam regressões ou falsos positivos.

## Expectativas De Pull Request

Todo PR deve declarar:

- rota
- perfil
- escopo
- verificação executada
- impacto de segurança
- impacto em documentação
- se docs bilíngues são necessárias

## Checks Recomendados

Rode checks relevantes antes de abrir PR:

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

## Política Anti-Overclaim

Não descreva samples como prova.

Use os rótulos de evidência de `ADOPTION_EVIDENCE.md`:

- `sample`
- `pilot`
- `benchmark`
- `independent`
