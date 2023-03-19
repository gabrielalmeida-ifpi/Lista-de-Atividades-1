/**
 * Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
 */

const prompt = require('prompt-sync')();

function main(){

const minutos = Number(prompt('Insira uma quantidade de minutos: '))
const horas = calcular_horas(minutos)
const minutos2 = calcular_minutos(minutos)

console.log(minutos,'minutos equivalem a',horas,'horas e',minutos2,'minutos.')

}

function calcular_horas(minutos){

const horas = Math.floor(minutos / 60)

return horas
}

function calcular_minutos(minutos){

const minutos2 = (minutos%60)

return minutos2
}





main()
