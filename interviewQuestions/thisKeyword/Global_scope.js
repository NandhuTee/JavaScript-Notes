

/*The this keyword in JavaScript is a reference to the object that is currently executing a piece of code. 
It can refer to different things depending on where it is used and the mode (strict or non-strict).*/

/* non-strict mode
browser :'this" refers to window
node.js :"this" refers to empty object ({}
*/

console.log(this); // In the browser, this logs the window object


/* Strict Mode:

In the browser, this in the global scope is undefined.
In Node.js, this in the global scope is also undefined.
*/

'use strict';
console.log(this); // undefined