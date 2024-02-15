/*The apply method is similar to call, but it takes an array of arguments.*/
const person = {
    name: "John",
  };
  
  function greet(message) {
    console.log(`${message}, ${this.name}!`);
  }
  
  const greetJohn = greet.bind(person);
  greetJohn("Hi"); // Output: Hi, John!