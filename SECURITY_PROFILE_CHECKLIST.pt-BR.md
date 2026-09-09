# Checklist De Perfis De Segurança AutoCast

Use este checklist para selecionar e validar o perfil de rigor de segurança.

## Seleção De Perfil

| Sinal | Perfil Recomendado |
|---|---|
| Mudança local de baixo risco ou apenas docs | `minimal` |
| Tarefa profissional normal de software | `standard` |
| Input externo, dependência, integração ou dado sensível | `secure` |
| Auth, autorização, pagamento, produção, infra, CI/CD, cripto, compliance | `critical` |

## Perfil Minimal

- escopo está claro
- baseline de segurança foi reconhecido
- nenhum segredo é exposto
- nenhuma transferência externa de dados sem aprovação

## Perfil Standard

- tudo do `minimal`
- task brief existe
- plano de verificação existe
- juízes exigidos são selecionados
- evidência é registrada para trabalho não trivial

## Perfil Secure

- tudo do `standard`
- trust boundaries são identificadas
- juiz de segurança é exigido
- mudanças de dependência/supply chain são revisadas
- exposição de logs/dados sensíveis é checada
- risco residual é registrado

## Perfil Critical

- tudo do `secure`
- threat model existe quando trust boundaries mudam
- caminhos de abuso/falha são testados
- mudanças de autorização são revisadas explicitamente
- mudanças de CI/CD e infraestrutura são revisadas
- aprovação humana é exigida antes de release
