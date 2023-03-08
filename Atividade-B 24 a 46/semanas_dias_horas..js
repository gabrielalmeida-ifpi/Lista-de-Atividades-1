/**
 * Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
corresponde.
 */

const prompt = require('prompt-sync')();

//Entrada
const horas = Number(prompt('Insira número de horas: '))

//Processamento
const semanas = Math.floor(horas / 168)
const dias = Math.floor((horas % 168)/7)
const horas_resto = Math.floor((horas % 168)%7)
//Saída

console.log(semanas,'semana(as)',dias,'dia(as) e',horas_resto, 'hora(as).')