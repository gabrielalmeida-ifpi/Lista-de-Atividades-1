/**
 * Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
 */

const prompt = require('prompt-sync')();

//Entrada
const base = Number(prompt('Valor da base do retângulo: '))
const altura = Number(prompt('Valor da altura do retângulo: '))

//Processamento
const área = base * altura


//Saída
console.log('A área desse retângulo tem o valor de: ',área)
