//function data object
// const user ={
//   id:24,
//   displayName: 'kren',
//   fullName: 'Kylo ren'
// }

// function introduce({displayName, fullName}){
//   console.log(`${displayName} is ${fullName}`);
// }

// introduce(user)
 

//Default parameters
// function exponentsFormula(baseNumber, exponents = 2){
//   const result = baseNumber ** exponents
//   console.log(result);
// }

// exponentsFormula(2) // Output: 8

//Rest Parameter
function sum(...num){
  let result = 0;
  for(let number of num){
    result += number;
  }
  return result
}
console.log(sum(1,2,3,4,5));

