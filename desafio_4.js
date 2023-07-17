const bet = [0, 5, 6, 10, 11,];

let min = 2;
let max = 10;

function solucao(min, max, bet) {
    const result = bet.filter((number) => number >= min && number <= max);
    console.log(result);
};





