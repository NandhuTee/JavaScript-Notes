let arr=[1,2,3,4,5,6,7];
arr.forEach((item,index,array)=>{
array[index]=item**2;
});
console.log(arr);//original array modified