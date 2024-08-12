
//const
const pi = 3.14159;
console.log(pi); // Outputs: 3.14159

// Cannot reassign or re-declare
// pi = 3.14; // This would cause an error

const person = { name: "Alice", age: 25 };
person.age = 26; // Allowed, because we are not reassigning the variable, just modifying the object property
console.log(person.age); // Outputs: 26

//let
//console.log(age);//ReferenceError: Cannot access 'age' before initialization
let age = 25;
console.log(age); // Outputs: 25

// Cannot re-declare in the same block scope
// let age = 30; // This would cause an error

if (true) {
    let age = 30; // This is a different scope
    console.log(age); // Outputs: 30
}

console.log(age); // Outputs: 25

//var
var name = "Alice";
console.log(name); // Outputs: Alice

// Re-declaring is allowed
var name = "Bob";
console.log(name); // Outputs: Bob
