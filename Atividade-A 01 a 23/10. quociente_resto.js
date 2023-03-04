/**
 * Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.
 */

const prompt = require('prompt-sync')();

//Entrada
const numero1 = Number(prompt('Insira um número inteiro: '))
const numero2 = Number(prompt('Insira um número inteiro novamente: '))

//Processamento
const quociente = numero1 / numero2
const resto = numero1 % numero2

//Saída
console.log('O quociente da divisão desses números é',quociente,', e o resto é',resto)