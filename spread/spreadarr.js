console.log("Spread Operator with Arrays\n");
console.log("\nCopying an array:");
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log(copyArray); // [1, 2, 3]

console.log("\nMerging an array");
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

console.log("\nAdding elements to an aray");
const array = [1, 2, 3];
const newArray = [...array, 4, 5];
console.log(newArray); // [1, 2, 3, 4, 5]
