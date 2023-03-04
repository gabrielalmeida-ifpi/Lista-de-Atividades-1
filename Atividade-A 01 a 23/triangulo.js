/**
 * Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
 */

const prompt = require('prompt-sync')();

//Entrada
const base = Number(prompt('Valor da base do triângulo: '))
const altura = Number(prompt('Valor da altura do triângulo: '))

//Processamento

const área = (base * altura)/2

//Saída
console.log('A área desse triângulo tem o valor de: ',área)
