/*Spread Operator in Function Calls:
Passing an array as arguments to a function */
function sum(a, b, c,d) {
    return a + b + c + d;
  }
  const numbers = [0 ,1, 2, 3];
  const result = sum(...numbers);
  /*iterable to be expanded in places where zero or more
   arguments (for function calls) */
  console.log(result); // 6

  //Combining objects in function calls:
  function mergedObject(studentName, d) {
    return {...studentName, ...d};
}

const studentName = {firstName: 'Nandhu', secondName: 'RT'};
const degree = {degree1: 'M.C.A', degree2: 'M.tech'};
const merged = mergedObject(studentName, degree);
console.log(merged);

