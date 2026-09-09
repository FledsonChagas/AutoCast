# Exemplos De Decisão De Rota AutoCast

Use estes exemplos para calibrar a seleção de rotas.

| Exemplo | Rota | Por Quê |
|---|---|---|
| Corrigir typo no README | fast-lane | apenas documentação, baixo risco |
| Alterar texto de botão | fast-lane | mudança local de texto em UI |
| Adicionar paginação no dashboard | standard | feature normal com verificação de comportamento |
| Refatorar formatter sem mudar comportamento | standard | preservação de comportamento necessária |
| Gerar unit tests para parser | standard | trabalho de testes com risco normal |
| Adicionar validação server-side em formulário público | secure-change | trust boundary de input externo |
| Adicionar suporte a upload de arquivos | secure-change | manipulação de arquivo não confiável |
| Atualizar dependência runtime | secure-change | revisão de supply chain |
| Corrigir usuário desativado acessando app | critical-change | auth e autorização |
| Adicionar reset de senha | critical-change | tokens e risco de account takeover |
| Adicionar job de deploy em CI/CD | critical-change | deploy e infraestrutura |
| Revisar PR apenas, sem edits | review-only | usuário bloqueou implementação |

## Regra De Rota

Quando houver dúvida, escolha a rota com menor atrito somente se o impacto de segurança for claramente baixo e a verificação for simples.

Escale quando a tarefa tocar auth, autorização, segredos, dados pessoais, pagamentos, dados de produção, CI/CD, infraestrutura, criptografia ou compliance.
