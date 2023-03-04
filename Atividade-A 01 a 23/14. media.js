/**
 * Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
 */

const prompt = require('prompt-sync')();

//Entrada
const nota1 = Number(prompt('Primeira nota: '))
const nota2 = Number(prompt('Segunda nota: '))
const nota3 = Number(prompt('Terceira nota: '))

const peso1 = Number(prompt('Peso da primeira nota: '))
const peso2 = Number(prompt('Peso da segunda nota: '))
const peso3 = Number(prompt('Peso da terceira nota: '))

//Processamento0
const mediaA = (nota1*peso1) + (nota2*peso2) + (nota3*peso3)
const mediaB = peso1 + peso2 + peso3
const mediaC = mediaA/mediaB
//Saída
console.log('A média ponderada é:',mediaC.toFixed(1))
