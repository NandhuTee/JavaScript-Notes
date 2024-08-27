
// Create an object
const Mobile = {
    MobileName: "motoedgefusion",
   //Mobileprice1: 40000;
  };
  
  // Access properties using dot notation
  console.log(Mobile.MobileName); // Output: "motoedgefusion"
  console.log(Mobile.Mobileprice); // Output: 40000
  /*In this example:

We define an object mobile with properties MobileName and Mobileprice.
When we access properties like Mobile.MobileName, JavaScript looks for them directly on the Mobile object. 
Since they are present, it returns their values.
If we were to access a property that doesn't exist on Mobile, JavaScript would traverse up the prototype 
chain to check if it exists on the Object.prototype.
 If it doesn't find it there, it returns undefined.
This illustrates how prototypes work in JavaScript and how objects inherit properties from their prototypes.*/