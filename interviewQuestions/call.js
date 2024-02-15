//call: The call method invokes a function with a specified this value and arguments provided individually.
function greet(){
    console.log(`Name:${this.name}`);
}
const person ={name:'nandhu'};
greet.call(person);
