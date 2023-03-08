/**
 * Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
 */

const prompt = require('prompt-sync')();

//Entrada
const idade_dias = Number(prompt('Insira uma idade em dias: '))

//Processamento
const anos = Math.floor(idade_dias / 365)
const meses = Math.floor((idade_dias % 365)/12)
const dias_resto = Math.floor((idade_dias % 365)%12)


//Saída

console.log('Essa pessoa tem',anos,'anos,',meses,'meses e',dias_resto,'dias de idade.')