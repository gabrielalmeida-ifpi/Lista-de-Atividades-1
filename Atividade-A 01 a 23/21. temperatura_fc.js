/**
 * Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
 */

const prompt = require('prompt-sync')();

//Entrada
const fahrenheit = Number(prompt('Insira a temperatura em °F: '))

//Processamento
const celsius = (5 * fahrenheit - 160) / 9


//Saída
console.log('A temperatura que você inseriu equivale a:',celsius,'°C')

