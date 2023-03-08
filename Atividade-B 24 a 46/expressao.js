/**
 * Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
 */

const prompt = require('prompt-sync')();

//Entrada
const A = Number(prompt('Insira um número inteiro: '))
const B = Number(prompt('Insira outro número inteiro: '))
const C = Number(prompt('Insira outro número inteiro: '))

//Processamento
const R = (A + B)**2
const S = (B + C)**2
const resultado = (R + S) / 2


//Saída

console.log('O resultado da expressão é:',resultado)