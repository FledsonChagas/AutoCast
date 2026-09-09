# Perfis AutoCast

AutoCast é seguro por padrão, mas o usuário escolhe o quão rigoroso o harness deve ser.

Perfis definem o nível esperado de cerimônia, revisão de segurança e evidência.

## Perfis

| Perfil | Quando Usar | Nível De Segurança | Atrito |
|---|---|---|---|
| `minimal` | Trabalho pessoal, tarefas de baixo risco, exploração inicial | baseline | baixo |
| `standard` | Desenvolvimento profissional normal | recomendado | médio |
| `secure` | Dados, dependências, integrações, input externo | forte | médio-alto |
| `critical` | Auth, pagamentos, produção, infra, CI/CD, cripto, compliance | estrito | alto |

## `minimal`

Obrigatório:

- objetivo da tarefa
- seleção de rota
- baseline de segurança
- check de correção

Recomendado:

- nota leve de evidência
- verificação manual

## `standard`

Obrigatório:

- task brief
- seleção de rota
- plano de verificação
- juiz de correção
- juiz de testes quando testes forem relevantes
- evidence log

## `secure`

Obrigatório:

- tudo do `standard`
- classificação de impacto de segurança
- juiz de segurança
- revisão de dependências e supply chain quando dependências mudarem
- registro de risco residual

## `critical`

Obrigatório:

- tudo do `secure`
- aprovação humana explícita antes de release
- threat model quando trust boundaries mudarem
- testes negativos para abuso ou caminhos de falha
- nenhuma exposição de segredos
- nenhuma ampliação de permissão sem justificativa

## Recomendação Padrão

Use `standard` por padrão.

Escale para `secure` ou `critical` quando a rota exigir.
