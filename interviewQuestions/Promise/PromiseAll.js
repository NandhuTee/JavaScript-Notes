/*Promise.all:

Definition: Returns a single promise that resolves when all promises resolve or rejects if any promise rejects.
Real-Time Use Case: Useful when you need to ensure that all operations are successfully completed before moving forward.
Example: Imagine buying three products on Amazon. If any of the products are out of stock (rejected promise), the entire order fails.*/
const product1 = new Promise((resolve) => setTimeout(resolve, 1000, "Product 1 Available"));
const product2 = new Promise((resolve, reject) => setTimeout(reject, 2000, "Product 2 Out of Stock"));
const product3 = new Promise((resolve) => setTimeout(resolve, 3000, "Product 3 Available"));

Promise.all([product1, product2, product3])
  .then((results) => console.log("All products are available:", results))
  .catch((error) => console.log("Order failed due to:", error));
// Output: "Order failed due to: Product 2 Out of Stock"
