/*he call method is used to invoke a function with a specific this value and arguments provided individually.*/

const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + " from " + city + ", " + country;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
};

console.log(person.fullName.call(person1, "New York", "USA")); 
// Output: "John Doe from New York, USA"

/*call allows you to use a method from one object on another object.
 In this example, person.fullName is called with person1 as this, and the arguments "New York" and "USA" are passed individually.*/