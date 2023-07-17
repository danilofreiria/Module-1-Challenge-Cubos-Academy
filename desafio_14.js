let input = "cubos \ncCuuuggbooyos";

function processData(input) {
    let newInput = input.trim().split("\n").map((word) => word.split(""));

    let passWord1 = newInput[0].filter(words => words.trim().length > 0);
    let passWord2 = newInput[1].filter(words => words.trim().length > 0);
    
    let index1 = 0; 

    for (let letter of passWord2) {
      if (letter === passWord1[index1]) {
        index1++; 
      }
  
      if (index1 === passWord1.length) {
        console.log("SIM");
      }
    }
  
    console.log("NAO")

}


/* function processData(input) {
    let newInput = input.trim().split("\n").map((word) => word.split(""));

    let passWord1 = newInput[0].filter(words => words.trim().length > 0);
    let passWord2 = newInput[1].filter(words => words.trim().length > 0);
    
    let result = passWord2.filter((letter) => passWord1.includes(letter));
    
    if (passWord1.every(letter => passWord2.includes(letter))) {
        console.log("SIM");
        } else if (passWord1.length === result.length) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }
}
 */


/* if (passWord1.every(letter => passWord2.includes(letter))) {
    console.log("SIM");
} else {
    console.log("NAO");
} */




/*   let passWord1 = newInput[0].filter(words => words.trim().length > 0);
  let passWord2 = newInput[1].filter(words => words.trim().length > 0);
  let verify = true;

  for (let i = 0; i < passWord1.length; i++) {
    if (passWord2.includes(passWord1[i])) {
      verify = true;
    } else {
      verify = false;
      break;
    }
  }

  if (verify) {
    console.log("SIM");
  } else {
    console.log("NAO");
  }
} */



