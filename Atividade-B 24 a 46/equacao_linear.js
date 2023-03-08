/**
 * Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo
Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.
 */

const prompt = require('prompt-sync')();

//Entrada
const coef_a = Number(prompt('Insira o coeficiente A: '))
const coef_b = Number(prompt('Insira o coeficiente B: '))
const coef_c = Number(prompt('Insira o coeficiente C: '))
const coef_d = Number(prompt('Insira o coeficiente D: '))
const coef_e = Number(prompt('Insira o coeficiente E: '))
const coef_f = Number(prompt('Insira o coeficiente F: '))


//Processamento
const valorx = (coef_c * coef_e - coef_b * coef_f) / (coef_a * coef_e - coef_b * coef_d)

const valory = (coef_a * coef_f - coef_c * coef_d) / (coef_a * coef_e - coef_b * coef_d)

//Saída

console.log('O valor de X equivale a',valorx,'e o valor de Y equivale a',valory)