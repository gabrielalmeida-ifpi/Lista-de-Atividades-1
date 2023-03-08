/**
 * Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
   número = 9534 ; soma = 9+5+3+4 = 21.
*/

prompt = require('prompt-sync')();

//Entrada
const inteiro = Number(prompt('Insira um número inteiro de quatro dígitos: '))

//Processamento
const dígi1 = inteiro % 10
const dígi2 = Math.floor(inteiro / 10) % 10
const dígi3 = Math.floor(inteiro / 100) % 10
const dígi4 =  Math.floor(inteiro / 1000)

const resultado = dígi1 + dígi2 + dígi3 + dígi4


//Saída

console.log('A soma dos dígitos desse número equivale a:',resultado)