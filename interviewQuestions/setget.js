let person = {
    firstName: 'John',
    lastName: 'Doe',
    // Getter for fullName
    //The get keyword defines a getter method that retrieves a value.
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    // Setter for fullName
    //The set keyword defines a setter method that updates a value.
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(' ');
    }
  };
  
  // Using getter
  //Getters are called automatically when the property is accessed
  console.log(person.fullName); // Output: John Doe
  
  // Using setter
  //setters are called when the property is assigned a new value.
  person.fullName = 'Jane Smith';
  console.log(person.firstName); // Output: Jane
  console.log(person.lastName); // Output: Smith
  