let lista = [1, 2, 3, 4, 5];

function solucao(lista) {
    let sum = 0;
    const result = lista.reduce((acummulator, currentValue) => { 
    sum = acummulator += currentValue;
    return sum}, 0);
    
    console.log(sum);
  
};