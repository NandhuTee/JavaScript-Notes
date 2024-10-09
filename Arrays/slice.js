/** slice returns a shallow copy of the portion of the an array into a new array object 
 * selected from start to end indices(end not included) */

const arr = [1, 2, 3, 4, 5];

// Extract elements from index 1 to 3 (3 not included)
let slicedArray = arr.slice(1, 3); // [2, 3]

// Slice from index 2 to the end of the array
let slicedArray2 = arr.slice(2); // [3, 4, 5]

// Slice the entire array
let slicedArray3 = arr.slice(); // [1, 2, 3, 4, 5]

// Slice with negative start index (-2 means second last element)
let slicedArray4 = arr.slice(-2); // [4, 5]

// Slice from index -4 to -1 (negative index slicing)
let slicedArray5 = arr.slice(-4, -1); // [2, 3, 4]


const str = "Hello, world!";

// Slice from index 0 to 5 (5 not included)
let slicedString = str.slice(0, 5); // 'Hello'

// Slice from index 7 to the end
let slicedString2 = str.slice(7); // 'world!'

// Slice with negative start index (-6 means 6th from the end)
let slicedString3 = str.slice(-6); // 'world!'

// Slice with negative indices from -6 to -1
let slicedString4 = str.slice(-6, -1); // 'world'
