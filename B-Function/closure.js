// function init(){
//   const name  = 'Obi Wan'

//   function greet(){
//     console.log(`Hallo ${name}`);
//   }

//   greet()
// }

// init()

const add = ()=>{
  let counter = 0;
  return () => {
    return counter++
  }
}

const addCounter = add()

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());