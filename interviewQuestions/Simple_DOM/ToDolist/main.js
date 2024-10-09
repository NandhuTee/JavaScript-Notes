document.getElementById("add-task-btn").addEventListener("click", function () {
    const taskText = document.getElementById("new-task").value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("task-list");

    // Create new task item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Clear the input field
      document.getElementById("new-task").value = "";
      //``````````````````//

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    
  
});
