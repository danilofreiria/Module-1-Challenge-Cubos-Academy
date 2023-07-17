//SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR MINÚSCULA

function processData(input) {
    
    let result = input.toLowerCase();
    let rightWord = "";

    if (input === result || input === result.toUpperCase()) {
        rightWord = result;
    } else if(input[0] === result[0] && input.slice(1) === result.slice(1).toUpperCase()) {
        rightWord = result.slice(0,1).toUpperCase() + result.slice(1); 
    } else {
        rightWord = input;
    }

    console.log(rightWord);
} 