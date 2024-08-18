/*1. Closures
A closure is a function that retains access to its lexical scope even after the function has finished executing. 
This allows the inner function to access variables from its outer function. */

function createCounter() { //createCounter is an outer function that defines a private variable count.
    let count = 0; // Private variable
    return function() {//It returns an inner function that increments and returns count.
    //The inner function is a closure because it retains access to the count variable even after createCounter has finished executing.
      count += 1; 
      return count;
    };
  }
  
  const counter = createCounter(); // `counter` is a closure
  //Every call to counter() accesses the same count variable, demonstrating how closures can maintain state.
  console.log(counter()); // Output: 1 
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  