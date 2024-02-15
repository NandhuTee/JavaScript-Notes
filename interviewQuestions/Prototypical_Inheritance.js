/*Prototypical Inheritance: 
Prototypical inheritance is a way to create a chain of objects where one object inherits properties and methods 
from another. It's a simple way to achieve inheritance in JavaScript without using classes. */
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
  
  function Employee(firstName, lastName, jobTitle) {
    Person.call(this, firstName, lastName); // Call the parent constructor
    this.jobTitle = jobTitle;
  }
  
  Employee.prototype = Object.create(Person.prototype); // Set the prototype chain
  
  const emp = new Employee("John", "Doe", "Developer");
  
  console.log(emp.firstName); // "John"
  console.log(emp.jobTitle); // "Developer"
  console.log(emp.getFullName()); // "John Doe"
  In the above code:

/*Person is a constructor function that sets up a basic person object.
Employee is another constructor function that inherits from Person using the Object.create method.
The __proto__ property is used to set the prototype of an object explicitly, but it's generally better to use Object.create or constructor functions for inheritance.
You can create a new instance of Employee, which inherits properties and methods from both Person and itself.*/