# Exemplo De Evidência De Segurança Em PR

Use este formato ao anexar evidência de segurança AutoCast a um pull request.

```txt
rota: critical-change
perfil: critical
areas sensiveis: autenticacao, token handling
trust boundary: usuario nao autenticado -> fluxo de reset de senha
standards revisados: OWASP access control, OWASP authentication, NIST SSDF PW/RV
juiz de seguranca: approved-with-remarks
achados bloqueantes: nenhum
risco residual: abuso de entrega de email exige follow-up de rate limiting
aprovacao humana: exigida antes de release
```

## Exigido Para PRs Críticos

- rota e perfil
- áreas sensíveis
- trust boundary
- evidência de verificação
- veredito do juiz
- achados bloqueantes
- risco residual
- recomendação de release
