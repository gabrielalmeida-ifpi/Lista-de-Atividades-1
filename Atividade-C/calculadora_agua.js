const prompt = require('prompt-sync')();

function main(){
    

    
    const peso = obter_input('Qual seu peso?: ')

    const agua_moderada = agua_quantidade(peso)
    const agua_intensa = agua_quantidade2(peso)
    
    console.log('Você precisa consumir',agua_moderada,'mL de água por dia se fizer atv. físicas moderadas e',agua_intensa,'mL se fizer atv. intensas.')
    
}

function obter_input(descricao){
    const input = Number(prompt(descricao))
    return input
}

function agua_quantidade(peso){
   
    const agua = peso * 35
    return agua
}

function agua_quantidade2(peso){
   
    const agua = peso * 45
    return agua
}

main()