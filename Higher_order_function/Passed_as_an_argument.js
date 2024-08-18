//first class citizens
//Higher order function passed as an argument
//display function is a higher-order-function because it takes another function as an argument and invokes it.add(2,3).
//the sum function which is passed as an argument to display function.
//the display function takes a call back function add and logs the result of invoking add with arguments 3,2

function sum(a,b){  //The sum function takes two parameters, a and b, and returns their sum.
    return a+b;
}

function display(add){ 
    console.log(add(3,2));//Inside the display function, the add function is called with the arguments 3 and 2.
}

display(sum); //The display function takes a function as its argument (add).

