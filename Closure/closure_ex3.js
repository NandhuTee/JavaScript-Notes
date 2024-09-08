//Data Encapsulation and Information Hiding**:

   //javascript
   function createCounter() {
    let count = 0;//closure over the count variable
 
     return {
       increment: function () {
         count++; //hiding the internal state
       },
       getCount: function () {
         return count;
       },
     };
   }

   const counter = createCounter();
   counter.increment();
   console.log(counter.getCount()); 
   /*Closure:

When createCounter is invoked, 
it creates a closure over the count variable. 
Both increment and getCount methods have access to this count variable even after 
the createCounter function has finished executing. 
This forms a closure where the inner functions retain 
access to the count variable from the outer scope.*/

/*The use of closures in this example encapsulates the count variable within the returned object.
 It provides access to this variable only through the defined methods (increment and getCount), 
 thereby hiding the internal state of the counter object and 
 ensuring that the count variable can't be directly modified from outside the closure. 
 This is a demonstration of data encapsulation and information hiding in JavaScript using closures.




*/
