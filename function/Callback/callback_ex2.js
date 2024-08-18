function doMath(operation, a, b) {//doMath is a higher-order function that accepts operation (a callback function) and executes it.
    return operation(a, b); // 'operation' is a callback function
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  console.log(doMath(add, 5, 3)); // Output: 8
  console.log(doMath(subtract, 5, 3)); // Output: 2
  