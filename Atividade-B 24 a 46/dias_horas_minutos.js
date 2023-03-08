/**
 * Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
corresponde.
 */

const prompt = require('prompt-sync')();

//Entrada
const minutos = Number(prompt('Insira quantidade de minutos: '))

//Processamento
const dias = Math.floor(minutos / 1440)
const horas = Math.floor((minutos % 1440)/60)
const minutos_resto = Math.floor((minutos % 3600)%60)
//Saída

console.log('Esse número de minutos equivale a',dias,'dias',horas,'horas e',minutos_resto,'minutos.')