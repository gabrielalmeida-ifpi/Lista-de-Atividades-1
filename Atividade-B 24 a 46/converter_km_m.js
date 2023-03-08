/**
 * Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
 */

const prompt = require('prompt-sync')();

//Entrada
const metros = Number(prompt('Insira valor em metros: '))

//Processamento
const quilometros = metros * 1000


//Saída

console.log(quilometros,'km.')