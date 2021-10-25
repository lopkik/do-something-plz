function getRandomInt(max) {
  // non-inclusive with max
  return Math.floor(Math.random()*max);
}

function displayTasks(tasks) {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  for (const[index, task] of tasks.entries()) {
    let li = document.createElement('li');
    li.innerText = task;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {deleteTask(index)};
    li.appendChild(deleteButton);
  
    taskList.appendChild(li);
  }
}

let tasks = ['get better', 'be better', 'do something']
chosenTaskID = null;
displayTasks(tasks);

// handle adding task to tasks array
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener('click', () => {
  tasks.push(taskInput.value);
  displayTasks(tasks);
  taskInput.value = '';
})

// handle deleting tasks from tasks array
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks(tasks);
}


// handle getting random task from tasks array
let getRandomTaskButton = document.getElementById("getRandomTaskButton");
let randomTask = document.getElementById("randomTask");
getRandomTaskButton.addEventListener('click', () => {
  // resetting from previous state
  randomTask.innerHTML = '';
  let chosenTaskIDElement;
  if (chosenTaskID !== null) {
    chosenTaskIDElement = document.getElementById("taskList").childNodes[chosenTaskID];
    chosenTaskIDElement.className = "";
  }

  let taskID = getRandomInt(tasks.length);
  randomTask.innerHTML = `${taskID}: ${tasks[taskID]}`
  
  chosenTaskID = taskID;
  chosenTaskIDElement = document.getElementById("taskList").childNodes[chosenTaskID];
  chosenTaskIDElement.className = "highlight";
  console.log(chosenTaskID);
})

// TODO: clear chosen task

// TODO: lock in chosen task
// button only shows up when random task is selected



// TODO: confirm you finished it then delete it