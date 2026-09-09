# Pacote De Threat Model Para Critical Change

Use este pacote para trabalho `critical-change`.

## Áreas Críticas

- autenticação
- autorização
- permissões
- pagamentos ou billing
- dados de produção
- dados pessoais ou regulados
- CI/CD
- infraestrutura
- criptografia
- compliance

## Perguntas Obrigatórias

1. Qual ativo está protegido?
2. Quem pode acessar ou influenciar o ativo?
3. Qual trust boundary muda?
4. Qual caso de abuso se torna possível?
5. Qual modo de falha causa mais dano?
6. Qual controle previne o caso de abuso?
7. Qual evidência prova que o controle funciona?
8. Qual risco residual permanece?

## Saída Exigida

- ativo
- ator
- trust boundary
- caso de abuso
- controle
- verificação
- veredito do juiz
- risco residual
- status de aprovação humana

## Regra De Release

Mudanças críticas não são liberadas apenas com confiança da IA.

Elas exigem evidência, revisão do juiz de segurança e aprovação humana explícita.
