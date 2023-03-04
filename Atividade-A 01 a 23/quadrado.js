/**
 * Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)
 */

const prompt = require('prompt-sync')();

//Entrada
const lado = Number(prompt('Valor do lado do quadrado: '))

//Processamento

const área = lado ** 2

//Saída
console.log('O valor da área desse quadrado é: ',área)
