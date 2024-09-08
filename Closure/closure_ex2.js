//The program demonstrates the concept of closures using a callback function scenario.
function greeting(name) {
  
    return function() {
      console.log(`Hello, ${name}!`);
    };
  }
  
  const greetJohn = greeting('John');
  greetJohn(); // Outputs: "Hello, John!"
  

/*
Explanation:

Closure is observed in the inner function returned by greeting, 
where it retains access to the name variable even after greeting has finished execution.

Callback is demonstrated when greetJohn() is called, invoking the inner function as a callback, 
resulting in the execution of the code inside the inner function (console.log('Hello, John!'))