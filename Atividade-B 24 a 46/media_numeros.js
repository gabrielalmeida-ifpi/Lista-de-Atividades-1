/**
 * Leia 3 números, calcule e escreva a média dos números.
 */

const prompt = require('prompt-sync')();

//Entrada
const num1 = Number(prompt('Insira um número: '))
const num2 = Number(prompt('Insira outro número: '))
const num3 = Number(prompt('Insira outro número: '))

//Processamento
const média = (num1 + num2 + num3)/3


//Saída

console.log('A média desses números equivale a:',média)