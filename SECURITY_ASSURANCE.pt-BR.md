# Pacote De Security Assurance AutoCast

AutoCast é seguro por padrão, mas o rigor de segurança é escolhido por perfil.

Este pacote define como AutoCast transforma segurança de checklist tardio em um processo de assurance guiado por rota.

## Modelo De Assurance

Security assurance no AutoCast possui cinco camadas:

| Camada | Propósito |
|---|---|
| Classificação no intake | Detectar impacto de segurança antes do trabalho começar |
| Seleção de perfil | Escolher rigor `minimal`, `standard`, `secure` ou `critical` |
| Gates de segurança | Aplicar checks exigidos pela rota/perfil selecionado |
| Juiz de segurança | Revisar independentemente trabalho sensível |
| Evidência | Registrar controles, achados, mitigações e risco residual |

## Seguro Por Padrão

Todo perfil AutoCast inclui segurança:

- `minimal`: segurança baseline, baixo atrito
- `standard`: segurança profissional normal
- `secure`: revisão forte para dados, dependências, integrações e input externo
- `critical`: revisão estrita para auth, autorização, pagamentos, dados de produção, CI/CD, infraestrutura, criptografia e compliance

## Condições Bloqueantes

Bloqueie a conclusão quando:

- segredos forem expostos
- autorização for enfraquecida sem aprovação explícita
- dados sensíveis puderem vazar
- risco de dependência ou build-chain for desconhecido em caminho sensível
- controles de segurança forem burlados
- permissões de CI/CD ou infraestrutura forem ampliadas sem revisão
- trabalho crítico não tiver aprovação humana exigida

## Evidência Exigida

Evidência de segurança deve incluir:

- rota e perfil selecionados
- áreas sensíveis tocadas
- trust boundaries cruzadas
- standards revisados
- testes ou verificações executadas
- vereditos dos juízes
- riscos residuais
- aprovação humana quando exigida

## Relação Com Tooling

Security assurance faz parte do framework standard. Checks de CLI, templates de CI ou adapters podem ajudar a validar, mas são tooling de referência opcional.
