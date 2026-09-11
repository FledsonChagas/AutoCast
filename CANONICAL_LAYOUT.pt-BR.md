# Layout Canônico `.autocast/`

AutoCast é adotado dentro de um projeto por meio de um diretório canônico `.autocast/`.

Esse diretório contém tanto o framework AutoCast pinado quanto o estado específico do projeto que usa o framework. Essas duas responsabilidades devem ficar separadas.

## Regra Central

```txt
.autocast/core/ = framework AutoCast, clonado ou adicionado como submodule
.autocast/*     = estado, configuração, evidência, tarefas e decisões do projeto
```

Não misture evidências, task briefs, decisões ou backlog do projeto dentro de `.autocast/core/`.

## Layout Recomendado

```txt
.autocast/
  AUTOCAST.md
  config.yml
  lock.yml

  core/
    README.md
    SPEC.md
    METHODOLOGY.md
    CONFORMANCE.md
    PROFILES.md
    ADAPTERS.md
    workflows/
    agents/
    security/
    templates/
    adapters/

  project/
    project-brief.md
    engineering-standards.md
    security-profile.md

  tasks/
    task-brief-*.md

  evidence/
    evidence-log.md
    reviews/
    prs/
    pilots/

  decisions/
    decision-records.md

  backlog/
    backlog-by-route.md
```

## Por Que `core/` Existe

`core/` mantém o framework reutilizável separado do estado local do projeto.

Isso permite:

- pinar a versão do AutoCast usada pelo projeto
- atualizar AutoCast sem sobrescrever evidências do projeto
- distinguir arquivos oficiais do framework de arquivos locais de adoção
- usar `.autocast/` como `.claude/`, `.opencode/` ou `.cursor/`: uma camada local de padrão de IA do projeto

## Padrão De Instalação

Forma recomendada com submodule:

```bash
git submodule add https://github.com/FledsonChagas/AutoCast.git .autocast/core
```

Forma com clone:

```bash
git clone https://github.com/FledsonChagas/AutoCast.git .autocast/core
```

A forma com submodule é melhor quando o projeto deve pinar e atualizar AutoCast explicitamente como dependência.

## Estado Do Projeto

Arquivos específicos do projeto ficam fora de `core/`:

- `.autocast/project/`
- `.autocast/tasks/`
- `.autocast/evidence/`
- `.autocast/decisions/`
- `.autocast/backlog/`

Esses arquivos pertencem ao repositório da aplicação e normalmente devem ser commitados quando descrevem metodologia, tarefas ativas, decisões ou evidência útil.

## Evidência Local Ou Sensível

Algumas evidências podem conter detalhes operacionais. Cada time deve decidir o que commitar.

Política recomendada:

- commitar task briefs, decisões, backlog e evidência sanitizada
- não commitar segredos, dados de produção, credenciais ou logs não sanitizados
- manter evidência bruta local em caminhos ignorados quando necessário

## Entrypoint

Todo projeto deve incluir:

```txt
.autocast/AUTOCAST.md
```

Esse arquivo informa aos agentes de IA onde o framework vive e onde fica o estado específico do projeto.
