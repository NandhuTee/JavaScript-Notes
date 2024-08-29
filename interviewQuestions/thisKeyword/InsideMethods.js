/*Non-strict Mode:

Definition: Inside a method, this refers to the object that the method is called on.*/

const person = {
    name: 'Nandhu',
    greet() {
        console.log(this.name);
    }
};
person.greet(); // Logs 'Nandhu'

//The behavior is the same in strict mode; 