// Example of shallow copy
//A copy of an object where only the first level is copied, and nested objects share the same reference.
const original = { a: 1, b: { c: 2 } };
console.log(original.a);//1
const shallowCopy = { ...original };

// Modify the nested object in the original
original.b.c = 3;
original.a = 5;
console.log(original.a);//5
console.log(original.b.c);//3
console.log(shallowCopy.b.c); // Output: 3 (changes are reflected in shallow copy)
console.log(shallowCopy.a);//1
/*A shallow copy of an object creates a new object, but it doesn't create copies of nested objects. 
Instead, it copies the references to those nested objects. 
Changes made to nested objects in the original object will also be reflected in the shallow copy, and vice versa.*/