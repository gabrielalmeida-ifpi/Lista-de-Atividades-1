/**
 * Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos 
segundos ele corresponde.
 */

const prompt = require('prompt-sync')();

//Entrada
const segundos = Number(prompt('Insira quantidade de segundos: '))

//Processamento
const horas = Math.floor(segundos / 3600)
const minutos = Math.floor((segundos % 3600)/60)
const segundos_resto = Math.floor((segundos % 3600)%60)
//Saída

console.log('Esse número de segundos equivale a',horas,'horas',minutos,'minutos e',segundos_resto,'segundos.')