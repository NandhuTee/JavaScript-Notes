//clearTimeout() and clearInterval(): Stop the respective timers.

const Id =setTimeout(() => {
    console.log("This message is not displayed after 10 seconds");
}, 10000);
// clear the timer
setTimeout(() => clearTimeout(Id), 6000);