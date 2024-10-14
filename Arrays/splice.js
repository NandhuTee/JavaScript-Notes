
/*splice changes the content of an array by removing or replacing existing elements and /or adding new element in place.*/
// Removing Elements
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
let removed = fruits.splice(2, 2);

console.log(fruits);  // Output: ["Apple", "Banana", "Pineapple"]
console.log(removed); // Output: ["Mango", "Orange"]

//Adding Elements
let fruits1 = ["Apple", "Banana", "Pineapple"];
fruits1.splice(2, 0, "Mango", "Orange");

console.log(fruits1);  // Output: ["Apple", "Banana", "Mango", "Orange", "Pineapple"]


//Replacing Elements
let fruits3 = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
fruits3.splice(1, 2, "Strawberry", "Blueberry");

console.log(fruits3);  // Output: ["Apple", "Strawberry", "Blueberry", "Orange", "Pineapple"]

//Removing All Elements from a Specific Index
let numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(3);

console.log(numbers);  // Output: [1, 2, 3]
//Using Negative start Index
let animals = ["Lion", "Tiger", "Elephant", "Zebra"];
animals.splice(-2, 1);

console.log(animals);  // Output: ["Lion", "Tiger", "Zebra"]


/*
Operation	Action
Remove	Specify the start index and deleteCount
Add	Specify the start index, deleteCount as 0, and add new elements
Replace	Specify the start index, deleteCount, and the new elements to replace with
Returns	An array of removed elements (if any)
*/