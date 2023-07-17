// //Treating the string  
// let newInput = input.trim().split("\n");
// newInput = newInput.toString();
// newInput = newInput.split(/[ ,]/g).filter(word => word.length > 0);
// numberInput = newInput.map((n) => { return parseFloat(n) });

 //finding the number of workers
// let n = numberInput[0];
// let workers = [];
// let maxDistance = 0;

// for (let employee1 = 0; employee1 < n; employee1++) {
//     for (let employee2 = employee1 + 1; employee2 < n; employee2++) {
//         const dx = workers[employee2][0] - workers[employee1][0];
//         const dy = workers[employee2][1] - workers[employee1][1];
//         const distance = Math.sqrt(dx ** 2 + dy ** 2);
//         if (distance > maxDistance) {
//             maxDistance = distance;
//         }
//     }
// }

// console.log(maxDistance);

// tratando a string
let newInput = input.trim().split("\n");
let numberInput = newInput.slice(1).map((line) => line.split(' ').map(parseFloat));

// encontrando o número de funcionários
let n = parseInt(newInput[0]);
let workers = numberInput;
let maxDistance = 0;

//hora da matemática
for (let employee1 = 0; employee1 < n; employee1++) {
  for (let employee2 = employee1 + 1; employee2 < n; employee2++) {
    const dx = workers[employee2][0] - workers[employee1][0];
    const dy = workers[employee2][1] - workers[employee1][1];
    const distance = Math.sqrt(dx ** 2 + dy ** 2);
    if (distance > maxDistance) {
      maxDistance = distance;
    }
  }
}

console.log(maxDistance);