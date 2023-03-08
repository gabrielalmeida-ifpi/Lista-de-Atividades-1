/**
 * Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a
cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o
valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da
mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas
prestações, de acordo com as regras acima.
 */

const prompt = require('prompt-sync')();

//Entrada
const valor = Number(prompt('Insira o valor da mercadoria: ')) //302

//Processamento
const prest1 = Math.floor(((valor / 2)/3)*2)
const prest2 = Math.floor(((valor / 2)/3)*2)

const entrada1 = Math.ceil((valor / 2)/3) 
const entrada2 = Math.ceil((valor / 2)/3)
entrada_final = entrada1 + entrada2

//Saída

console.log('A entrada terá o valor de R$',entrada_final,' e as duas prestações terão o valor de R$',prest1)