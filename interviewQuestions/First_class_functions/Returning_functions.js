function multiplier(factor) {
    return function (x) {
      return x * factor;
    };
  }
  
  const double = multiplier(2);
  console.log(double(5)); // Output: 10

  /*
  Key Concepts in the Program:
Higher-Order Function: multiplier returns a function.
Closure: The returned function remembers factor from its lexical scope.
Currying-like Behavior: multiplier fixes factor, and the returned function waits for the second argument (x).*/