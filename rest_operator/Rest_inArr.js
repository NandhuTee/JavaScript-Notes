console.log("Collecting remaining array elements using rest operator");
const [first,second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(second);//output: 2
console.log(rest); // Output: [ 3, 4, 5]
