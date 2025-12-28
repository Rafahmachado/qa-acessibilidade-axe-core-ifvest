
const { createHtmlReport } = require('axe-html-reporter');
const fs = require('fs');

// Lê o JSON completo
const rawResults = JSON.parse(fs.readFileSync('axe-results.json', 'utf8'));

// Extrai os violations do primeiro item do array
const violationsOnly = { violations: rawResults[0].violations };

const html = createHtmlReport({
  results: violationsOnly,
  options: {
    projectKey: 'IFVest',
    reportFileName: 'relatorio-acessibilidade.html',
    outputDir: 'relatorios',
  },
});

fs.writeFileSync('relatorios/relatorio-acessibilidade.html', html);
console.log(" Relatório gerado com sucesso!");


// //gerar todos os relatorios 
// const { createHtmlReport } = require('axe-html-reporter');
// const fs = require('fs');

// // Captura os argumentos passados no terminal
// const inputJson = process.argv[2]; // Ex: axe-pagina2.json
// const outputHtml = process.argv[3]; // Ex: relatorio-pagina2.html

// if (!inputJson || !outputHtml) {
//   console.error(" Uso: node gerarRelatorio.js <arquivo-json> <nome-relatorio.html>");
//   process.exit(1);
// }

// try {
//   const rawResults = JSON.parse(fs.readFileSync(inputJson, 'utf8'));
//   const violationsOnly = { violations: rawResults[0].violations };

//   const html = createHtmlReport({
//     results: violationsOnly,
//     options: {
//       projectKey: 'IFVest',
//       reportFileName: outputHtml,
//       outputDir: 'relatorios',
//     },
//   });

//   fs.writeFileSync(`relatorios/${outputHtml}`, html);
//   console.log(` Relatório gerado: relatorios/${outputHtml}`);
// } catch (error) {
//   console.error(` Erro ao gerar relatório: ${error.message}`);
// }
