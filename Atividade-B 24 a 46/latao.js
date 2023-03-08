/**
 * Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.
 */

const prompt = require('prompt-sync')();

//Entrada
const kg_latão = Number(prompt('Insira a quantidade de quilogramas de latão: '))

//Processamento
const cobre = kg_latão * (70/100)
const zinco = kg_latão * (30/100)

//Saída

console.log('Para obter essa quantidade de latão, são necessários',cobre,'kg de cobre e',zinco,'kg de zinco.')