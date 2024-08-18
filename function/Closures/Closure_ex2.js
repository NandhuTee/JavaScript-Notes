//  combines both closures and higher-order functions:
function createOperation(operation) {//createOperation is a higher-order function that returns a new function. 
    return function(a, b) {
      return operation(a, b);//      They retain the specific operation function (add or subtract) and can be used to perform operations with given arguments.
    };
  }
  
  // Functions to be used
  function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  // Create specific operations using closures
  const addOperation = createOperation(add); //addOperation and subtractOperation are closures created by createOperation. 
  const subtractOperation = createOperation(subtract);
  
  console.log(addOperation(10, 5));       // Output: 15
  console.log(subtractOperation(10, 5));  // Output: 5
  



