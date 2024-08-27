/*Template literals are a new way to handle strings in JavaScript, 
allowing for embedded expressions, multiline strings, and string interpolation.
*/
const name = 'John';
const age = 30;

// Using template literals
//Template literals are enclosed by backticks (`) instead of single or double quotes.
const message = `Hello, my name is ${name} and I am ${age} years old.`;
//Expressions inside ${} are evaluated and embedded directly in the string.

console.log(message);

// Multiline strings
//Template literals also support multiline strings without needing special characters like \n.
const poem = `
  Roses are red,
  Violets are blue,
  JavaScript is awesome,
  And so are you!
`;
console.log(poem);
