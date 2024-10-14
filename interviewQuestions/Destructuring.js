/*Destructuring is a syntax in JavaScript that allows unpacking values from arrays or properties from objects 
into distinct variables.*/
// Array Destructuring
const [first, second] = [10, 20];
console.log(first); // 10
console.log(second); // 20

// Object Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // John
console.log(age); // 30

/*Real-Time Use Case: Destructuring is commonly used in function parameters, 
especially when dealing with objects or arrays, to directly access needed values.*/
function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  }
  
  greet({ name: 'Alice', age: 25 });
  

  function greet1({...num}){
    console.log(typeof(num));
    console.log(num);
  }

  greet1([1,2,34,5]);