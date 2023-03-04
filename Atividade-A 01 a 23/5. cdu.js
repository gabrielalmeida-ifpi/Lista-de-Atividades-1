/**
 * 
 */

const prompt = require('prompt-sync')();

//Entrada
const inteiro = Number(prompt('Insira um número inteiro, de 3 dígitos: '))

//Processamento
const inversorA = Math.floor(inteiro / 100)
const resto = Math.floor(inteiro % 100)

const inversorB = Math.floor(resto / 10)

const inversorC = inteiro % 10
//Saída
console.log('A soma dos elementos desse número é:',inversorA + inversorB + inversorC)