/*The == operator performs type coercion before comparing two values.
 This means that if the values being compared are of different types, 
JavaScript attempts to convert them into the same type before making the comparison.*/

console.log(5 == "5"); // true (string "5" is converted to number 5)
console.log(true == 1); // true (boolean true is converted to number 1)
console.log(null == undefined); // true (both are treated as equal)


/*The === operator does not perform type coercion. 
It compares both the value and the type of the operands. 
If the types are different, the comparison returns false.*/

console.log(5 === "5"); // false (number 5 is not the same type as string "5")
console.log(true === 1); // false (boolean true is not the same type as number 1)
console.log(null === undefined); // false (different types)


console.log(" " == 0); // true (empty string is coerced to 0)
console.log(" " === 0); // false (string " " is not the same type as number 0)