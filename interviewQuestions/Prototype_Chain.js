/*Prototype Chain in JavaScript:
Prototype Chain: In JavaScript, objects can have prototypes, and these prototypes can themselves have prototypes,
forming a chain. When you attempt to access a property or method on an object,
JavaScript will traverse this prototype chain. It starts by checking the object itself for the property or method. 
JavaScript would traverse up the prototype chain to check if it exists on the Object.prototype. 
If it doesn't find it there, it returns undefined.*/

const person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  
  const employee = {
    jobTitle: "Developer",
  };
  
  // Set the prototype of `employee` to `person`
  employee.__proto__ = person;
  
  console.log(employee.firstName); // "John" (inherited from `person`)
  console.log(employee.jobTitle); // "Developer" (own property)
  console.log(employee.getFullName()); // "John Doe" (inherited from `person`)
  