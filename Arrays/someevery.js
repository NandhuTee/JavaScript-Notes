//check whether some or all elements in an array meet a condition.
const hasNegative =[1,-2,3].some(el=>el>0); 
console.log(hasNegative);//true

const allPositive=[1,2,3].every(el=>el>0);
console.log(allPositive);//true