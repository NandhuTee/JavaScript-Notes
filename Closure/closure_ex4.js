/*Closure:

The event listener function forms a closure over the clickCount variable declared in the outer createButton function. 
This closure retains access to the clickCount variable even after the createButton function has finished executing.*/
function createButton() {
    let clickCount = 0;
    const button = document.createElement("button");

    button.innerText = "Click me";
    button.addEventListener("click", function () {
      clickCount++;
      console.log(`Button clicked ${clickCount} times.`);
    });

    return button;
  }

  const button = createButton();
  document.body.appendChild(button);