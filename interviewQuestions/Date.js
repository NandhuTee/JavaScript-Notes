// Creating a new date object
//The Date object is used to work with dates and times in JavaScript.
let today = new Date();

// Specific date
let birthDate = new Date('1990-08-25');
console.log(`${birthDate}`);


// Methods to extract date components
console.log(today.getFullYear()); // Current year
console.log(today.getMonth()); // Current month (0-based, 0 = January)
console.log(today.getDate()); // Current date
console.log(today.toDateString()); // Date as a readable string