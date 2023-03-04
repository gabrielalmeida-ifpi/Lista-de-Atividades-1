/**
 * Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)
 */

const prompt = require('prompt-sync')();

//Entrada
const raio = Number(prompt('Insira o valor do raio da esfera: '))

//Processamento
const volume = ((4 * 3.14 * raio ** 3) / 3)


//Saída
console.log('O valor do volume dessa esfera é: ',volume.toFixed(1))
