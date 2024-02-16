/*
Currying is a functional programming technique in JavaScript where a function with multiple arguments is transformed 
into a sequence of functions, each taking a single argument. This allows you to partially apply arguments to a function, 
creating new functions with fewer arguments.
*/
// Normal function with multiple arguments
function add(x, y) {
    return x + y;
  }
  
  // Curried version of the add function
  function curriedAdd(x) {
    return function(y) {
      return x + y;
    };
  }
  
  // Usage of the curriedAdd function
  const add5 = curriedAdd(5); // Create a new function that adds 5 to its argument
  console.log(add5(3)); // Output: 8 (5 + 3)
  