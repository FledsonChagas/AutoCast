# Conformidade AutoCast

Conformidade define o quanto um projeto segue o framework standard AutoCast.

O objetivo não é burocracia. O objetivo é linguagem compartilhada e adoção mensurável.

## Níveis

| Nível | Nome | Significado |
|---|---|---|
| L0 | Prompt Pack | Usa prompts ou documentos AutoCast informalmente |
| L1 | AutoCast Structured | Usa task briefs, rotas, workflows e juízes básicos |
| L2 | AutoCast Compliant | Segue o loop canônico e registra evidências para trabalho não trivial |
| L3 | AutoCast Secure | Aplica perfis secure-by-default e juízes de segurança para trabalho sensível |
| L4 | AutoCast Verified | Executa evals, acompanha qualidade dos juízes e valida decisões de rota |
| L5 | AutoCast Certified | Revisado independentemente, benchmarkado e governado em processo repetível |

## Maturidade Atual Do Repositório AutoCast

AutoCast v0.4 candidate está aproximadamente em:

```txt
L2: AutoCast Compliant
```

Ele possui definição de rotas, workflows, juízes, templates de evidência, baseline de segurança, adapters oficiais, documentos de especificação do framework, perfis e evals iniciais.

Ainda não é L4/L5 porque validação externa, evidência ampla de adoção real e certificação independente ainda não existem.

## Requisitos Mínimos L2

- Usar o loop canônico AutoCast.
- Classificar trabalho em uma rota oficial.
- Usar task brief para trabalho não trivial.
- Aplicar o baseline de segurança.
- Usar os juízes exigidos pela rota selecionada.
- Registrar evidência do trabalho concluído.

## Requisitos Mínimos L3

- Tudo do L2.
- Usar perfis `secure` ou `critical` quando áreas sensíveis forem tocadas.
- Rodar juiz de segurança para rotas `secure-change` e `critical-change`.
- Registrar risco residual.
- Bloquear exposição de segredos e regressões de segurança de alto risco.

## Requisitos Mínimos L4

- Tudo do L3.
- Manter evals de rotas e juízes.
- Acompanhar falsos positivos e falsos negativos.
- Rodar checks de conformidade em CI ou revisão de release.
- Publicar metodologia de benchmark.

## Requisitos Mínimos L5

- Tudo do L4.
- Revisão independente ou validação de terceiros.
- Evidência de conformidade versionada.
- Governança para mudanças em rotas, perfis e regras de segurança.
