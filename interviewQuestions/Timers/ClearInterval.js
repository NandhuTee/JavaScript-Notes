// setInterval example
const intervalId = setInterval(() => {
    console.log("This message is displayed every 2 seconds");
}, 2000);
//clearTimeout() and clearInterval(): Stop the respective timers.
// Stopping the interval after 6 seconds
setTimeout(() => clearInterval(intervalId), 6000);