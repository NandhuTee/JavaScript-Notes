function multiplier(factor) {//Higher-Order Function (multiplier):
    //factor (a number): This parameter is used in the returned function to multiply the number parameter.
    return function (number) { //multiplier returns a new function that takes one parameter (number).
      return number * factor;
    };
  }
  
  const double = multiplier(2);//multiplier(2) returns a function where factor is 2.
  const triple = multiplier(3);
  
  console.log(double(5)); // 10 It multiplies 5 by 2 (5 * 2), resulting in 10.
  console.log(triple(5)); // 15