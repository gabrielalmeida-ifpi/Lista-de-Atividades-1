/**
 * Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
fuma, o nº de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).
 */

const prompt = require('prompt-sync')();

//Entrada
const tempo = Number(prompt('A quantos anos essa pessoa fuma?: '))
const quantidade = Number(prompt('Quantos cigarros ela costuma fumar por dia?: '))
const preço = Number(prompt('Qual o preço da carteira de cigarros?: '))

//Processamento
const tempo_total = tempo * 365
const quantidade_total = quantidade / 20
const preço_total = preço * quantidade_total * tempo_total

//Saída

console.log('Essa pessoa gastou com cigarros um total de aproximadamente',preço_total.toFixed(2),'em dinheiro.')