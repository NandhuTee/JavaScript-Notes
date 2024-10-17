
const greet = () => `Hello, ${this.name}`;

const person = { name: 'Nandhu' };

console.log(greet.call(person));

// Output: "Hello, undefined" (since `this` doesn't bind in arrow functions)
