/**
 * Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.
 */

const prompt = require('prompt-sync')();

//Entrada
const quantia = Number(prompt('Insira a quantia que deseja sacar: '))

//Processamento
const n50 = quantia / 50
const n10 = (quantia % 50)/10
const n5 = ((quantia % 50)%10)/5
const n1 = ((quantia % 50)%10)%5
//Saída

console.log('Você sacou:',Math.floor(n50),'notas de R$50,',Math.floor(n10),'notas de R$10',
Math.floor(n5),'notas de R$5 e',Math.floor(n1),'moedas de R$1')