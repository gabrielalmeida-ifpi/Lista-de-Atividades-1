/**
 * Leia um valor em km, calcule e escreva o equivalente em m.
 */

const prompt = require('prompt-sync')();

//Entrada
const quilometro = Number(prompt('Valor em km: '))

//Processamento
const metro = quilometro * 1000


//Saída
console.log(quilometro,'km equivalem a',metro,'m.')
