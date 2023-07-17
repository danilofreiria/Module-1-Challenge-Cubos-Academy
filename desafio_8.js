const numeros = [1, 3, 2, 1];

function solucao(numeros) {
    let result = 0
    
    //realizando a soma da lista
    const sum = numeros.reduce((acummulator, currentValue) => { 
    return acummulator += currentValue}, 0);

    
    let playerIndex = sum % numeros.length;

    if (playerIndex === 0) {
        result = numeros.length;
      } else {
        result = playerIndex;
      }
    
    
    console.log(result);
}

solucao(numeros)

