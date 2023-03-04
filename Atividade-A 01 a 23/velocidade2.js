/**
 *  Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
 */

const prompt = require('prompt-sync')();

//Entrada
const kmporhora = Number(prompt('Insira a velocidade em km/h: '))

//Processamento

const mporsegundo = kmporhora / 3.6

//Saída

console.log(kmporhora,'km/h equivalem a', mporsegundo, 'm/s.')