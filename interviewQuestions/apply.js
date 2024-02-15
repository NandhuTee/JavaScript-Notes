//The apply method is similar to call, but it takes an array of arguments.
const person = {
    name: "John",
  };
  
  function greet(message1, message2) {
    console.log(`${message1} ${message2}, ${this.name}!`);
  }
  
  greet.apply(person, ["Hello", "there"]); // Output: Hello there, John!