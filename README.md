# Testes Automatizados de Acessibilidade – IFVEST

Este projeto demonstra a execução de testes automatizados
de acessibilidade utilizando a biblioteca axe-core em
JavaScript puro, com geração de relatórios HTML a partir
dos resultados obtidos.

## Ferramentas Utilizadas
- axe-core
- axe-html-reporter
- Node.js

## Escopo do Teste
- Página avaliada: Cadastro de usuário
- URL: https://ifvest.jcr.ifsp.edu.br/cadastro
- Diretrizes: WCAG 2.1 (A e AA)

## Execução
1. Instalar dependências:
```bash
- npm install

## Gerar relatório HTML:

node scripts/gerarRelatorio.js
Resultados

Os resultados são exportados em formato HTML, contendo:

Violações encontradas

Nível de impacto

Referência às diretrizes WCAG

Elementos afetados
