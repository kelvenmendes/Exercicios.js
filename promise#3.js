//código da MegaSena usando promise
//função que Gera aleatorimante um número de 1 a 60

function gerarNumerosEntre(min, max){
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve =>{
        const fator = max - min + 1
        const aleatorimante = parseInt(Math.random() *(max - min + 1)) + min
        resolve(aleatorimante)
    })
}

gerarNumerosEntre(1, 60).then(console.log)