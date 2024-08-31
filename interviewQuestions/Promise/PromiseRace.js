/*Promise.race:

Definition: Returns a promise that resolves or rejects as soon as one of the promises resolves or rejects.
Real-Time Use Case: Useful when you only care about the first promise to complete.
Example: You want the fastest delivery option for an Amazon order, regardless of seller location.*/
const fastDelivery = new Promise((resolve) => setTimeout(resolve, 1000, "Fast Delivery Available"));
const slowDelivery = new Promise((resolve) => setTimeout(resolve, 2000, "Slow Delivery Available"));

Promise.race([fastDelivery, slowDelivery])
  .then((result) => console.log("Chosen delivery option:", result));
// Output: "Chosen delivery option: Fast Delivery Available"
