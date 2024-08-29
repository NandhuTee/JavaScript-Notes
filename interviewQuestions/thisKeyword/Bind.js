
const person = {
    firstName: "Alice",
    lastName: "Johnson",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person2 = {
    firstName: "Bob",
    lastName: "Brown"
};

const boundFullName = person.fullName.bind(person2);
console.log(boundFullName()); 
// Output: "Bob Brown"
/*Creates a new function with a specific this value .
Returns a new function with the this value bound, useful for delayed execution.*/