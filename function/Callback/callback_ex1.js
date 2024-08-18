
function greet(name, callback) {//The (HOF)greet function takes two parameters: name (a string) and callback (a function).
    console.log('Hello ' + name);//Inside greet, the message "Hello John" is printed first.
    callback();  //After that, the callback function is called, which in this case is sayGoodbye. This prints "Goodbye!".
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('John', sayGoodbye); //Calling the Higher-Order Function (greet) with a Callback:

/*A callback function is a function that is passed as an argument to another function and 
is executed after some operation has been completed.
 The function that receives the callback is often referred to as a higher-order function.*/

/*
Higher-Order Function	A function that takes other functions as arguments or returns a function.
Callback Function	A function passed as an argument to another function, executed later.*/