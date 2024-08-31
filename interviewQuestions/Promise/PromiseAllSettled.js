/* Promise.allSettled:

Definition: Returns a promise that resolves when all promises have settled (resolved or rejected) with an array of their results.
Real-Time Use Case: Useful when you want to know the outcome of all operations, regardless of success or failure.
Example: Checking the availability of all products in an Amazon wishlist, even if some are unavailable.*/
const productCheck1 = new Promise((resolve) => setTimeout(resolve, 1000, "Product 1 Available"));
const productCheck2 = new Promise((resolve, reject) => setTimeout(reject, 2000, "Product 2 Out of Stock"));
const productCheck3 = new Promise((resolve) => setTimeout(resolve, 3000, "Product 3 Available"));

Promise.allSettled([productCheck1, productCheck2, productCheck3])
  .then((results) => console.log("Product status:", results));
// Output: "Product status: [{ status: "fulfilled", value: "Product 1 Available" }, { status: "rejected", reason: "Product 2 Out of Stock" }, { status: "fulfilled", value: "Product 3 Available" }]"
