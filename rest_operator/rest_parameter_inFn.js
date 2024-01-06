/*The JavaScript rest operator, represented by three dots (...), allows you to capture multiple function arguments or elements from an iterable (like an array) into a single variable. 
t's beneficial when handling an undetermined number of arguments or elements within a function or when you want to gather remaining array elements into a single variable.*/
console.log("Using rest parameter in function arguments");

function sum(...arr){
return arr.reduce((total,arrvalue)=>total+arrvalue,0);
}

console.log(sum(1,2,3));//6
console.log(sum(1,2,3,4,5));//15