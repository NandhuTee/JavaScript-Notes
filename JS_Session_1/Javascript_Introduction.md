# JA Basics
JS-Versatile ,frontend web development
create-dynamic web pages by adding functionality.
# Key features
1.Interactivity and Event Driven programming
2.DOM -Document Object Model- Page Structure,tree of objects.
    Definition:The DOM is a programming Interface for web documents. it represents the structure of the web page as a tree of objects.
    Each element in the HTML document (like p ,img, heading) are represented as a node in the tree.JS can interact with the nodes 
    to change the content,structure and style off the web page.
3.Asynchronous Programming concept=>It allows certain tasks to be executed in the background(fetching data from a server)
 without blocking the main thread(example clicks,scrolls).
    3.1 Synchronous Vs Asynchronous:
            Syn-tasks are performed one after another.
            Ayn-allows tasks to start and move on to the next task,before the previous one finishes.
    3.2 Asyn-why important:
            - Non blocking behavior: Js runs on a single thread,which means only one operation can be executed at a time.
        If task is like fetching data from a server or reading a larger file- syn means web page freeze. So move on to Asyn concept.
    3.3 Example scenarios: 
            -N/w req (fetching data from API,loading images, submitting form data to server),
            -Timers(Delaying the execution of the function using SetTimeout or SetInterval)
            -file i/o(reading or writing files  in a non blocking manner, especially in Node.js)
    3.4 How Asyn programming works in Java script( callbacks, Promises, Async/Await)
    3.5 Benefits of Asyn Programming:
            3.5.1 Improved user experience 3.5.2 Efficient Resource Utilization(non-blocking ) 3.5.3 Scalability (Multiple task simultaneously)
    4. It supports cross browser compatibility.
    5.Lightweight and Interpreted: JavaScript is executed directly by the browser.
    6.Dynamic Typing: Variables are not bound to a specific type.
    7.First-Class Functions: Functions in JavaScript can be treated like any other variable.
    8.Object-Oriented: Supports objects, but it’s more prototype-based rather than class-based like in traditional OOP languages.
