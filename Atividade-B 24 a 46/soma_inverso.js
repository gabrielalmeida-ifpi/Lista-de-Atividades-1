/**
 * Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso. 
 */

const prompt = require('prompt-sync')();

//Entrada
const inteiro = Number(prompt('Insira um número inteiro de três dígitos: '))

//Processamento
const inversor1 = inteiro % 10
const inversor2 = Math.floor(inteiro / 10) % 10
const inversor3 = Math.floor(inteiro / 100)
const inverso = inversor1.toString() + inversor2.toString() + inversor3.toString()

const resultado = Number(inteiro) + Number(inverso)

//Saída

console.log('A soma entre esse número e seu inverso equivale a: ',resultado)