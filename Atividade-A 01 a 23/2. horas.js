/**
 *  Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
 */

const prompt = require('prompt-sync')();

//Entrada
const horas = Number(prompt('Selecione uma quantidade de horas: '))
const minutos = Number(prompt('Selecione uma quantidade de minutos: '))

//Processamento
const horaspraminutos = (horas * 60) + minutos

//Saída
console.log(horas,'horas e',minutos,'minutos equivalem a um total de',horaspraminutos,'minutos.')
