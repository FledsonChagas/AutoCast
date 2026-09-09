# Prompts Oficiais De Invocação Dos Adapters

Use estes prompts como invocações oficiais de referência para adapters AutoCast.

## Minimal

```md
Use o perfil AutoCast minimal para esta tarefa.
Classifique a rota, aplique o baseline de segurança, faça apenas a mudança com escopo e forneça uma nota curta de verificação.

Tarefa:
<tarefa>
```

## Standard

```md
Use o perfil AutoCast standard para esta tarefa.
Crie um task brief, selecione a rota, implemente apenas a mudança com escopo, rode a verificação relevante e use os juízes exigidos antes de finalizar.

Tarefa:
<tarefa>
```

## Secure

```md
Use o perfil AutoCast secure para esta tarefa.
Classifique o impacto de segurança, identifique trust boundaries, aplique o baseline de segurança, use juízes de correção/testes/segurança e registre risco residual.

Tarefa:
<tarefa>
```

## Critical

```md
Use o perfil AutoCast critical para esta tarefa.
Crie task brief, threat model, decisão de rota, plano de verificação, relatório de evidência de segurança e relatórios dos juízes exigidos. Não libere sem aprovação humana explícita.

Tarefa:
<tarefa>
```
