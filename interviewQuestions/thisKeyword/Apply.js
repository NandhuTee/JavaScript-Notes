//The apply method is similar to call, but it takes arguments as an array.

const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + " from " + city + ", " + country;
    }
};

const person1 = {
    firstName: "Jane",
    lastName: "Smith"
};

console.log(person.fullName.apply(person1, ["Los Angeles", "USA"])); 
// Output: "Jane Smith from Los Angeles, USA"
