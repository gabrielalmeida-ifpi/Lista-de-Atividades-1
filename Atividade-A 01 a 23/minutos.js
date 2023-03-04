/**
 * Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
 */

const prompt = require('prompt-sync')();

//Entrada
const minutos = Number(prompt('Insira uma quantidade de minutos: '))

//Processamento
const horas = Math.floor(minutos / 60)
const minutos2 = (minutos%60)

//Saída
console.log(minutos,'minutos equivalem a',horas,'horas e',minutos2,'minutos.')
