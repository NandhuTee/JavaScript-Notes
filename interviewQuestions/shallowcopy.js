// Example of shallow copy
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

// Modify the nested object in the original
original.b.c = 3;

console.log(shallowCopy.b.c); // Output: 3 (changes are reflected in shallow copy)
/*A shallow copy of an object creates a new object, but it doesn't create copies of nested objects. 
Instead, it copies the references to those nested objects. 
Changes made to nested objects in the original object will also be reflected in the shallow copy, and vice versa.*/