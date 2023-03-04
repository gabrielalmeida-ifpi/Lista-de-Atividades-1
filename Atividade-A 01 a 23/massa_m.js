/**
 * Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
 */

const prompt = require('prompt-sync')();

//Entrada
const quilograma = Number(prompt('Insira o valor de quilogramas: '))

//Processamento
const grama = quilograma * 1000


//Saída
console.log(quilograma,'kg equivalem a',grama,'g.')
