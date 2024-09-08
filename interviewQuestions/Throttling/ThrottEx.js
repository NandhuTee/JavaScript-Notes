let counter = 1;
  let isClickAllowed = true;
const clickHandler = () => {
 if (isClickAllowed) {
      let display = document.getElementById("onButtonClick");
      display.innerHTML = "You clicked me " + counter + " times";
      counter += 1;

      // Prevent further clicks for 1000 milliseconds
      isClickAllowed = false;
      setTimeout(() => {
        isClickAllowed = true;
      }, 1000);
    }
  };

// Write your code here

document.getElementById('myButton').addEventListener('click', clickHandler);