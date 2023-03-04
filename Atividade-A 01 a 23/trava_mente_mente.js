/**
 * Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
 */

const prompt = require('prompt-sync')();

//Entrada
const numero1 = Number(prompt('Insira um número: '))
const numero2 = Number(prompt('Insira um número novamente: '))


//Processamento
const result = (numero1 + numero2) / (numero1 - numero2)

//Saída
console.log('A divisão da soma pela subtração desses números é igual a', result)
