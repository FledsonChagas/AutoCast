# Adoção Do AutoCast

AutoCast é incorporado ao fluxo de desenvolvimento. Ele não precisa ser instalado como programa obrigatório.

## Para Quem É

- Devs individuais que querem mais confiabilidade no trabalho assistido por IA.
- Times pequenos que precisam de disciplina compartilhada para desenvolvimento com IA.
- Consultorias que querem entrega repetível para clientes.
- Empresas que precisam de segurança, evidência e governança.

## Modos De Adoção

## 1. Adoção Leve

Use AutoCast como padrão de prompts e workflows.

Comece por:

- `README.pt-BR.md`
- `SPEC.pt-BR.md`
- `METHODOLOGY.pt-BR.md`
- `PROFILES.pt-BR.md`
- `workflows/autocast-run.md`
- `security/security-baseline.md`

## 2. Adoção Como Padrão Do Projeto

Adicione AutoCast ao repositório como `autocast/` ou `.ai/autocast/`.

Exija que tarefas assistidas por IA produzam:

- task brief
- rota
- evidência de verificação
- vereditos dos juízes para trabalho não trivial

## 3. Adoção Por Adapter De Ferramenta

Use os adapters oficiais para:

- OpenCode
- Claude Code
- Cursor

Adapters são oficiais porque essas ferramentas fazem parte do padrão pretendido do AutoCast.

## 4. Adoção Com Tooling De Referência

Use a CLI opcional quando quiser validação ou medição local.

Exemplo:

```bash
node bin/autocast.mjs route --task "Adicionar reset de senha"
node bin/autocast.mjs eval --strict
```

## Rollout Recomendado

1. Comece com o perfil `standard`.
2. Use `secure` para dados, dependências, integrações ou input externo.
3. Use `critical` para auth, pagamentos, produção, infra, CI/CD, criptografia e compliance.
4. Adicione requisitos de evidência depois que o time entender as rotas.
5. Adicione evals depois que os tipos recorrentes de tarefa forem conhecidos.
