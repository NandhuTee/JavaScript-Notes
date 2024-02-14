/*Prototype Chain in JavaScript:

Prototypal inheritance mechanism where objects can inherit properties and methods from other objects.*/

// Base constructor function for Mobile
function Mobile(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
}

// Method to display mobile details
Mobile.prototype.displayDetails = function(){
    console.log(this.brand + ' ' + this.model + ' - $' + this.price);
};

// Constructor function for Smartphone inheriting from Mobile
function Smartphone(brand, model, price, operatingSystem){
    Mobile.call(this, brand, model,price); // Call the parent constructor
    this.operatingSystem = operatingSystem;
}

// Inheriting from Mobile
Smartphone.prototype = Object.create(Mobile.prototype);

// Constructor function for FeaturePhone inheriting from Mobile
function FeaturePhone(brand, model, price, hasCamera) {
    Mobile.call(this, brand, model, price); // Call the parent constructor
    this.hasCamera = hasCamera;
}

// Inheriting from Mobile
FeaturePhone.prototype = Object.create(Mobile.prototype);

// Creating instances of Smartphone and FeaturePhone
var iPhone = new Smartphone("Apple", "iPhone 12", 1000, "iOS");
var nokia3310 = new FeaturePhone("Nokia", "3310", 50, true);

// Displaying details of smartphones and feature phones
iPhone.displayDetails(); // Output: Apple iPhone 12 - $1000
nokia3310.displayDetails(); // Output: Nokia 3310 - $50
