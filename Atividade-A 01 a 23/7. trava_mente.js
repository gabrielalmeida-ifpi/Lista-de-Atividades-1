/**
 *  Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
 */

const prompt = require('prompt-sync')();

//Entrada
const numero1 = Number(prompt('Insira um número: '))
const numero2 = Number(prompt('Insira um número: '))
const numero3 = Number(prompt('Insira um número: '))

//Processamento
const result1 = numero1 + numero2
const result2 = numero2 - numero3

//Saída
console.log(numero1,'+',numero2,'=',result1,'e',numero2,'-',numero3,'=',result2)
