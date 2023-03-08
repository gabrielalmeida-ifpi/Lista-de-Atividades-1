/**
 * Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.
 */

const prompt = require('prompt-sync')();

//Entrada
const pontox1 = Number(prompt('Insira o X de um ponto no plano: '))
const pontoy1 = Number(prompt('Insira o Y desse ponto no plano: '))
const pontox2 = Number(prompt('Insira novamente o X de um ponto no plano: '))
const pontoy2 = Number(prompt('Insira o Y desse ponto no plano: '))

//Processamento
const distância = ((pontox2 - pontox1)**2) + ((pontoy2 - pontoy1)**2)
resultado = distância ** (1/2)


//Saída

console.log('A distância entre esses pontos equivale a',distância)