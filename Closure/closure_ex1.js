/*Closure allows inner functions to access variables from their outer (enclosing) function,
 even after the outer function has completed execution. 
 Closures are created when an inner function reference variables from an outer function.*/
 function outerFunction() {
    let outerVar = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVar); // Inner function has access to outerVar
    }
 
    return innerFunction;
  }
  
  const closureExample = outerFunction(); // Closure formed here
  closureExample(); // Callback executes the inner function
  
  //Closures can be involved in the implementation of callbacks

/* Here, innerFunction is declared inside outerFunction and 
uses the outerVar variable declared in its outer scope.
 Even after outerFunction finishes execution, 
 closureExample() still retains access to the outerVar variable due to closure. 
This is because innerFunction has formed a closure over its parent scope, 
preserving the access to outerVar.*/
  
  
/*output
I am from the outer function*/