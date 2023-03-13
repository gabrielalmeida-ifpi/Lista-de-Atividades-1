const prompt = require('prompt-sync')();

function main(){
    

    
    const idade = Number(prompt('Insira sua idade: '))
    const freq_moderada = freqmoderada_calc1(idade)
    const freq_moderada2 = freqmoderada_calc2(idade)
    const freq_intensa = freqintensa_calc1(idade)
    const freq_intensa2 = freqintensa_calc2(idade)
    
    console.log('A faixa de batimentos cardíacos ideais para você, em atividades moderadas:',freq_moderada.toFixed(2),'a',freq_moderada2.toFixed(2))
    console.log('E em atividades intensas:',freq_intensa.toFixed(2),'a',freq_intensa2.toFixed(2))
    
}

function freqmoderada_calc1(idade){
   
    const freq_max = 220 - idade
    const freq_moderada1 = freq_max * (50/100)
    return freq_moderada1
}

    function freqmoderada_calc2(idade){
   
        const freq_max = 220 - idade
        const freq_moderada2 = freq_max * (70/100)
        return freq_moderada2


}
function freqintensa_calc1(idade){
   
    const freq_max = 220 - idade
    const freq_intensa1 = freq_max * (70/100)
    return freq_intensa1
}



function freqintensa_calc2(idade){
    const freq_max = 220 - idade
    const freq_intensa2 = freq_max * (85/100)
    return freq_intensa2
    
}

main()