const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

// Modify the nested object in the original
original.b.c = 3;

console.log(deepCopy.b.c); // Output: 2 (changes are not reflected in deep copy)
/*A deep copy of an object creates a new object and recursively copies all nested objects within it.
 This means that any changes made to nested objects in the original object will not affect the deep copy,
  and vice versa. Deep copying ensures complete independence between the original and copied objects.*/
