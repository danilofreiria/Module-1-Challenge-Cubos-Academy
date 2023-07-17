const jogadores = [   

        { "nome": "Herman",
          "jogada": 1
        },
        {
          "nome": "Rhodes",
          "jogada": 0
        },
        {
          "nome": "Beach",
          "jogada": 0
        },
        {
          "nome": "Laurel",
          "jogada": 0
        },
        {
          "nome": "Beatrice",
          "jogada": 0
        },
        {
          "nome": "Alison",
          "jogada": 0
        },
        {
          "nome": "Saundra",
          "jogada": 0
        },
        {
          "nome": "Klein",
          "jogada": 0
        }
      ];


function solucao(jogadores) {     
    let result = "";
    let listZero = jogadores.filter((number) => number.jogada === 0);
    let listOne =  jogadores.filter((number) => number.jogada === 1);

    if (listZero.length === 1) {
        result = listZero[0].nome;
    } else if (listOne.length === 1) {
        result = listOne[0].nome;
    } else {
        result = "NINGUEM";
    };
    console.log(result);
};

solucao(jogadores)

