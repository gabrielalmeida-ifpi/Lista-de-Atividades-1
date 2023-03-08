/**
 * Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
 */

const prompt = require('prompt-sync')();

//Entrada
const meses = Number(prompt('Insira número de meses> '))

//Processamento
const anos = Math.floor(meses / 12)
const meses_resto = meses % 12

//Saída

console.log(anos,'ano(s)','e',meses_resto,'mês ou meses.')