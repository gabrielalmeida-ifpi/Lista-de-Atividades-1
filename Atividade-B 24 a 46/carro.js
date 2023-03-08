/**
 * O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor.
 */

const prompt = require('prompt-sync')();

//Entrada
const custo_fab = Number(prompt('Insira o custo de fábrica do carro: '))

//Processamento
custo = custo_fab + (custo_fab * 28/100) + (custo_fab * 45/100)


//Saída

console.log('O custo desse carro é: ',custo)