/*
Nome: Leonardo Vinícius da Silva
Data: 28/01/2020
Dependencias: csvjson

Resumo: Programa que converte um arquivo CSV com o nome "input.csv" para uma rquivo JSON com a saida output.json,
programa realizado para a terceira etapa do teste da ClassApp.
*/ 

const csvjson = require('csvjson'); // usei este plugin, no documento do Git não estava especificado se podia
var fs = require('fs'); // declarei um fs para escrever o json convertido em um objeto para um arquivo
const readFile = require('fs').readFile; // usei para ler o arquivo CSV 

//
var options = {
    delimiter : ';', // Delimitador do CSV personalzado o padrão desse plugin é ","
    quote     : '"' // por via das duvidas delimitei o caractere de inicio e fim de palavras
  };

// essa parte lê o arquivo e salva o conteudo no fileContent
readFile('./input.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Caso de algum erro ele vai especificar no log
        throw new Error(err);
    }
    const jsonObj = csvjson.toObject(fileContent,options); // convertendo o csv para json e passando as opções usadas
    // escrevi em um arquivo o resultado
    fs.writeFile('output.json', JSON.stringify(jsonObj), (err) => {
        if (err) throw err
        console.log('The file has been saved!') // se não der nenhum tipo de erro ele retorna essa mensagem
      })



});




