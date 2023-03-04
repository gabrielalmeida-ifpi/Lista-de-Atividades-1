/**
 * Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
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
console.log('O inverso desse número é:',inversorC.toString() + inversorB.toString() + inversorA.toString())
