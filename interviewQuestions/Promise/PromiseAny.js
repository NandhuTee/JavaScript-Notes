/*
Promise.any:

Definition: Returns a promise that resolves as soon as any of the promises resolve, or rejects if all promises are rejected.
Real-Time Use Case: Useful when you want at least one operation to succeed.
Example: Buying any available item during a limited-time Amazon sale.*/
const buyProduct1 = new Promise((resolve, reject) => setTimeout(reject, 1000, "Product 1 Unavailable"));
const buyProduct2 = new Promise((resolve) => setTimeout(resolve, 2000, "Product 2 Available"));
const buyProduct3 = new Promise((resolve, reject) => setTimeout(reject, 3000, "Product 3 Unavailable"));

Promise.any([buyProduct1, buyProduct2, buyProduct3])
  .then((result) => console.log("Bought item:", result))
  .catch((error) => console.log("No items were available:", error));
// Output: "Bought item: Product 2 Available"

