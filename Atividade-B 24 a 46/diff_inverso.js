/**
 * Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
 */

const prompt = require('prompt-sync')();

//Entrada
const inteiro = Number(prompt('Insira um número inteiro de 3 dígitos: '))

//Processamento
const inversor1 = inteiro % 10
const inversor2 = Math.floor(inteiro / 10) % 10
const inversor3 = Math.floor(inteiro / 100)
const inverso = inversor1.toString() + inversor2.toString() + inversor3.toString()

const resultado = inteiro - inverso

//Saída

console.log('A diferença entre esse número e seu inverso equivale a: ',resultado)