/**
 * Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
 */

const prompt = require('prompt-sync')();

//Entrada
const bin1 = Number(prompt('Insira um dígito binário: '))
const bin2 = Number(prompt('Insira outro dígito binário: '))
const bin3 = Number(prompt('Insira outro dígito binário: '))
const bin4 = Number(prompt('Insira outro dígito binário: '))

//Processamento
const decimal = (bin1 * (2**3)) + (bin2 * (2**2)) + (bin3 * (2**1)) + (bin4 * (2**0))


//Saída

console.log('O número decimal correspondente é: ',decimal)