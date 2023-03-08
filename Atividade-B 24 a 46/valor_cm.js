/**
 * Leia um valor em m, calcule e escreva o equivalente em cm.
 */

const prompt = require('prompt-sync')();

//Entrada
const metros = Number(prompt('Insira valor em metros: '))

//Processamento
const centimetros = metros * 100


//Saída

console.log(centimetros,'centímetros.')
