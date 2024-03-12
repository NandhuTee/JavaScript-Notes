/** Elements can be added using methods like push(), unshift() or directly assigning value to specific index */
let arr=[1,2,3,4];
arr[4]=5;
console.log(arr[4]);

arr.push(6);//add at the end of the array
arr.unshift(-1);//insert element at the start of the array.

console.log(arr);
arr.forEach((item,index,arr)=>{
    //forEach modify the original array
arr[index] =item**2;
});
console.log(arr);