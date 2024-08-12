//var

console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

/*Explanation: The declaration var a; is hoisted to the top, but the assignment a = 10;
 remains where it is. Thus, the first console.log(a); 
 returns undefined because the variable a is hoisted but not yet assigned a value.*/
 //

 //let and const
 console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // Output: 20

const c = 30;
console.log(c); // Output: 30

/*Explanation: In the case of let and const, the variables are hoisted to the top of their block scope but are not initialized. 
Accessing them before their declaration leads to a ReferenceError.*/

/*Function Declarations:
Entire function definitions are hoisted, meaning you can call the function before it is defined in the code.*/

greet(); // Output: "Hello, world!"

function greet() {
    console.log("Hello, world!");
}


/* Function Expressions:
If a function is assigned to a variable (using var, let, or const), 
only the variable declaration is hoisted, not the function definition.*/

greet(); // TypeError: greet is not a function

var greet = function() {
    console.log("Hello, world!");
};
