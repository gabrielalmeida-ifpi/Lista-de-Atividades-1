/**
 *  Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
 */

const prompt = require('prompt-sync')();

//Entrada
const celsius = Number(prompt('Insira a temperatura em °C: '))

//Processamento
const fahrenheit = (9 * celsius + 160) / 5


//Saída
console.log('A temperatura que você inseriu equivale a:',fahrenheit,'°F')
