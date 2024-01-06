/*Methods can be defined within an object as a key-value pair where the value is a function.
They are invoked using ojbect.methodName()*/
const calculator ={
    add:function(a,b){
        return(a+b);
    },
    subtract:function(a,b){
        console.log(a-b);
    }
};

console.log(calculator.add(5,3));
calculator.subtract(3,2);

/* Output 
8
1
*/
