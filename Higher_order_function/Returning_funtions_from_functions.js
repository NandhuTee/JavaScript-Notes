//higher order functions
//where a function is returned by another function

function createAdder(x){

    return function(y){
                return x+y;
    };
}


const addtwo = createAdder(2);
//higher order function where the returned function is stored in the variable.
console.log(addtwo(3));

//createAdder function takes a parameter x and returns a new function that adds x to its argument y.

//addTwo is assigned the function returned by createAdder(2) ,which means it now represents a function that adds 2 to its argument.

//when addTwo(3) is called,it effectively computes 2+3
/*The inner function function(y){...} has access to the variable x from its outer function(createAdder).
Even through the createAdder function has completed execution and its scope has closed ,
the inner function maintains a reference to the variable x forming a closure.*/