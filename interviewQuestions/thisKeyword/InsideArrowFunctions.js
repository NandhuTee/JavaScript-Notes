/*Non-strict Mode:

Definition: Arrow functions do not have their own this context. 
Instead, they inherit this from the surrounding (lexical) context.*/
const person = {
    name: 'nandhu',
    greet: () => {
        console.log(this.name);
    }
};
person.greet(); // Logs undefined (or the global `this` depending on the environment)

//The behavior of this in arrow functions remains the same in strict mode.

const person1 = {
    name: 'nandhu',
    greet: function()  {
        console.log(this.name);
    }
};
person1.greet(); // Logs nandhu