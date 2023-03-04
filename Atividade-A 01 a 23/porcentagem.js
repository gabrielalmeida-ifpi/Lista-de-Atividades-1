/**
 * Leia um valor em real (R$), calcule e escreva 70% deste valor. 
 */

const prompt = require('prompt-sync')();

//Entrada
const real = Number(prompt('Insira um valor em R$: '))

//Processamento
const ajuste = (real * 70/100)


//Saída
console.log('70% de R$',real,'equivale a R$',ajuste)

