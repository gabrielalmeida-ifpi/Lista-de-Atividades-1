// Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

const prompt = require('prompt-sync')();

//Entrada
const mporsegundo = Number(prompt('Insira a velocidade em m/s: '))

//Processamento

const kmporhora = mporsegundo * 3.6

//Saída

console.log(mporsegundo, 'm/s equivalem a', kmporhora, 'km/h.')
