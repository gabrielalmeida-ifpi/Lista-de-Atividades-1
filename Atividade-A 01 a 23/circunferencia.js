/**
 * Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
 */

const prompt = require('prompt-sync')();

//Entrada
const raio = Number(prompt('Insira o valor do raio: '))

//Processamento
const comprimento = 2 * 3.14 * raio


//Saída
console.log('O valor do comprimento dessa circunferência é: ',comprimento.toFixed(1))
