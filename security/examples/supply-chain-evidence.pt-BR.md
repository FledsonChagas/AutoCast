# Exemplos De Evidência De Supply Chain

Use quando uma tarefa adiciona, atualiza, remove ou executa dependências, plugins, actions de CI, containers, MCP servers ou ferramentas de build.

## Evidência Mínima

- nome da dependência
- versão ou origem
- motivo da mudança
- se executa scripts de install/build
- se precisa de acesso de rede
- se lida com segredos ou dados sensíveis
- revisão de vulnerabilidades conhecidas
- nota de licença/compliance quando relevante
- plano de rollback

## Exemplo De Evidência

```txt
dependencia: example-package
versao: 1.2.3
motivo: necessario para parsear formato existente do projeto
scripts de install: nenhum
acesso de rede: nenhum em runtime
acesso a segredos: nenhum
revisao de vulnerabilidade: nenhum high/critical conhecido nas fontes disponiveis
licenca: compativel com politica do projeto
rollback: remover pacote e restaurar parser anterior
```

## Sinais Bloqueantes

- origem desconhecida em caminho crítico
- dependência executável não pinada em CI/CD
- scripts de install com comportamento incerto
- acesso de rede sem revisão
- dependência lida com segredos sem revisão de segurança
