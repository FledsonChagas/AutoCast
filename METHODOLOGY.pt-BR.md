# Metodologia AutoCast

AutoCast é uma metodologia prática para desenvolvimento assistido por IA.

Ela existe para ajudar devs individuais, times pequenos, consultorias e empresas a usar agentes de código com IA sem perder disciplina de engenharia.

## Filosofia

AutoCast assume que agentes de IA são poderosos, mas pouco confiáveis quando escopo, contexto, verificação e segurança estão mal definidos.

A metodologia reduz a superfície de erro por meio de:

- intake mínimo
- task brief explícito
- seleção de rota baseada em risco
- implementação com escopo limitado
- julgamento independente
- baseline de segurança
- registro de evidência

## O Método De Trabalho

## 1. Intake

Pergunte apenas o que muda rota, escopo, segurança ou verificação.

## 2. Task Brief

Converta o pedido do usuário em um contrato claro:

- objetivo
- escopo
- fora de escopo
- critérios de aceite
- plano de verificação
- impacto de segurança

## 3. Rota

Escolha a rota com base no tipo de tarefa e no risco.

Não use o mesmo processo para corrigir um typo e alterar autenticação.

## 4. Build

O builder implementa a menor mudança correta.

Sem refactors amplos. Sem novas dependências sem justificativa. Sem ampliar permissões sem revisão.

## 5. Verificação

A verificação deve provar comportamento, não detalhes triviais de implementação.

## 6. Juiz

Juízes avaliam de forma independente.

Os juízes exigidos dependem da rota.

## 7. Evidência

Registre o que mudou, o que foi testado, o que os juízes encontraram e qual risco permanece.

## Seguro Por Padrão

Todo perfil AutoCast inclui segurança. O usuário escolhe o nível de rigor, não se segurança existe ou não.

## Direção, Não Dogma

AutoCast é opinativo, mas não absoluto.

Ele oferece um jeito certo de executar desenvolvimento assistido por IA. Times podem adaptar desde que preservem o loop central, a lógica de rotas, a postura de segurança e a disciplina de evidência.
