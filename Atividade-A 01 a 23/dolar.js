/**
 * Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
 */

const prompt = require('prompt-sync')();

//Entrada
const valordolar = Number(prompt('Insira um valor para atribuir ao dólar: '))
const quantidadedolar = Number(prompt('Insira um valor em dólar: '))

//Processamento
const quantidadereal = quantidadedolar * valordolar


//Saída
console.log('Com o valor que você atribuiu,',quantidadedolar,'dólares equivalem a R$',quantidadereal)
