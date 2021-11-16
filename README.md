# Uma Calculadora de Liberdade Financeira Gratuita

[Veja aqui](https://mathdks.github.io/liberdade-financeira/)

## Sobre o que é esse site?

A Calculadora de Liberdade Financeira tem o único objetivo de te mostrar quanto dinheiro você precisa investir para nunca mais precisar trabalhar.

## Os resultados são reais?

Todos os cálculos são realizados com base em informações fornecidas pelo usuário.
Foram utilizadas algumas fórmulas sobre juros compostos para obter os resultados.
Então, os resultados apresentados (quando não acontece um bug) são reais. 

Para apresentar a quantidade de vezes que o cálculo já foi realizado, foi feita uma integração com o Airtable.

## Quer testar por conta própria?

É só seguir esses passos aqui:

1. Clone esse repositório
2. Instale as dependências do projeto rodando `npm install`
3. Crie uma base no Airtable
```
nome da base: Views
nome da tabela: Visualizações
nome da coluna: Quantidade
```
4. Crie um arquivo .env e preencha as credenciais de API
```
AIRTABLE_API_KEY=
BASE_ID=
TABLE_ID=
```
5. Rode o comando `npm run dev` para entrar no modo de desenvolvedor, ou `npm run generate` para entrar no modo de produção