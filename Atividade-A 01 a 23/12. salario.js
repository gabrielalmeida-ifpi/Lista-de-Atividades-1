/**
 * Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
 */

const prompt = require('prompt-sync')();

//Entrada
const salario = Number(prompt('Insira o valor do salário: '))

//Processamento

novosalario = salario + (salario * 25/100)


//Saída
console.log('O novo salário é: R$',novosalario)
