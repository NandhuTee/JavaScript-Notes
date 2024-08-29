/*call: Invokes the function immediately, passing the first argument as this and subsequent arguments individually.*/

function showThis(a, b) {
    console.log(this, a, b);
}
showThis.call({ name: "A" }, 1, 2); // Logs { name: "A" }, 1, 2

/*apply: Similar to call, but takes arguments as an array. */

showThis.apply({ name: "B" }, [3, 4]); // Logs { name: "B" }, 3, 4

/*bind: Creates a new function with this bound to the specified object. Does not call the function immediately.*/
const boundFunc = showThis.bind({ name: "C" }, 5, 6);
boundFunc(); // Logs { name: "C" }, 5, 6
