/**
 * Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
 */

const prompt = require('prompt-sync')();

//Entrada
const anos = Number(prompt('Quantos anos essa pessoa tem?: '))
const meses = Number(prompt('Quantos meses desde que ela fez aniversário?: '))
const dias = Number(prompt('E quantos dias restaram?: '))

//Processamento
const dias_result = (anos * 365) + (meses * 30) + dias


//Saída

console.log('Essa pessoa tem',dias_result,'dias de idade.')