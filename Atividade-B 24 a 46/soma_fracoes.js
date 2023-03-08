/**
 * Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
resultado em forma de fração.
 */

const prompt = require('prompt-sync')();

// Entrada
const num1 = Number(prompt('Numerador 1: '))
const den1 = Number(prompt('Denominador 1: '))
const num2 = Number(prompt('Numerador 2: '))
const den2 = Number(prompt('Denominador 2: '))

// Processamento
const denominador = den1 * den2
const numerador = ((denominador/den1)*num1) + ((denominador/den2)*num2)

// Saída
console.log('Resultado', numerador+'/'+denominador)