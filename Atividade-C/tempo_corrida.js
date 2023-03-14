const prompt = require('prompt-sync')();

function main(){
    

    
    const distância = obter_input('Insira a distância da prova (em metros): ')
    const velocidade = obter_input('E a velocidade média do atleta (em km/h): ')

    const tempo_prova = calcular_tempo_prova(distância, velocidade)

    console.log('O tempo dessa prova, em minutos, é:', tempo_prova,'minuto(s).')
    
}

function obter_input(descricao){
    const input = Number(prompt(descricao))
    return input
}

function calcular_tempo_prova(distância, velocidade){
   
    const tempo = (distância / (velocidade * 1000)) * 60
    return tempo
}

main()

