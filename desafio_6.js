const lista = [18,25,96,78,36,95,85,96,45,12,78,19];

function solucao(lista) {
    let result = "";

    if (lista.every((number) => number < 18)) {

        result = "CRESCA E APARECA";

    } else {
        let minAge = lista.filter((number) => number >= 18);
        result = Math.min(...minAge);
    }
    console.log(result);
    
         
  }