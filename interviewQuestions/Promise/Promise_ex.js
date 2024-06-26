// Promise: handle asynchronous operations, avoid callback hell.
// Promise states: pending, fulfillment, rejected.
// Methods: .then, .catch, .finally.
// Methods: Promise.all and Promise.race.

const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rannum = Math.random();
        if (rannum < 0.5) {
            resolve("Success");
        } else {
            reject("Failure");
        }
    }, 2000);
});

mypromise
    .then((resolve_msg) => {
        console.log(resolve_msg);
    })
    .catch((reject_msg) => {
        console.log(reject_msg);
    });
