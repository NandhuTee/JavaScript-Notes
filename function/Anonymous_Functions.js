/**Anonymous Functions: JavaScript also supports anonymous functions, which are functions without a name. 
 * They can be assigned to variables or used as arguments to other functions. */
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(2,3)); // Calling the anonymous function

/**Here, multiply holds the anonymous function, and it's invoked by appending () to the variable name. */