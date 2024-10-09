function greet(name, greetingFunction) {
    console.log(greetingFunction(name));
  }
  
  function sayHi(name) {
    return `Hi, ${name}!`;
  }
  
  greet("Alice", sayHi); // Output: Hi, Alice!
  //Passing Functions as Arguments:First class functions (higher order function and call back concept)