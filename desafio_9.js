const precos = [100, 100];


function solucao(precos) {
    let result = 0;

    if (precos.length > 2) {
        result = precos.reduce((acummulator, currentValue) => { 
            sum = acummulator += currentValue;
            return sum}, 0);
            sum -= Math.min(...precos) / 2; 
    } else {
        result = precos.reduce((acummulator, currentValue) => { 
            sum = acummulator += currentValue;
            return sum}, 0);
    }

    console.log(sum);
    
  }

  solucao(precos)
