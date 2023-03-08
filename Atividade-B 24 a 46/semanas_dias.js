/**
 * Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde. 
 */

const prompt = require('prompt-sync')();

//Entrada
const dias = Number(prompt('Insira número de dias: '))

//Processamento
semanas = Math.floor(dias / 7)
dias_resto = dias % 7

//Saída

console.log(semanas,'semana(as) e',dias_resto,'dias.')