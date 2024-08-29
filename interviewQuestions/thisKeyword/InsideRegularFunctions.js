// Inside Regular Functions
/**In non-strict mode, 
 this inside a regular function refers to the global object
  (window in browsers, global in Node.js) if not called as a method. */

function showThis() {
    console.log(this);
}
showThis(); // Logs the global object

/*Strict Mode:

Definition: In strict mode, this inside a regular function is undefined.*/
'use strict';
function showThis() {
    console.log(this);
}
showThis(); // Logs undefined
