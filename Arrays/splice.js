
/*splice changes the content of an array by removing or replacing existing elements and /or adding new element in place.*/
let arr=[1,2,3,4,5,6,7,8,9];
let removed_elements=arr.splice(5,2);//removes elements from 3rd index 1 element
console.log(arr);
console.log(removed_elements);

let insert_element=arr.splice(3,0,9,10);//inserting elements with splice
console.log(insert_element);
console.log(arr);


let replace_elements=arr.splice(2,4,'a','b','c','d');
console.log(arr);