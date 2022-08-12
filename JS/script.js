taskText = localStorage.getItem("userData");
newObj = JSON.parse(taskText);

//array to push all the tasks to
let tasks = [];


//THIS FUNCTION THAT IS COMMENTED OUT WAS ANOTHER ATTEMPT TO CAPTURE THE INPUT
// function createTask(taskInput) {
//     taskInput = document.getElementById("taskName").value;
//     return taskInput;
// }

//THIS CLASS IS USED TO CAPTURE THE INPUT DATA
class Task {
    constructor(taskname, taskdueday) {
        this._taskname = taskname;
        this._taskdueday = taskdueday;
    }
    get taskname() {
        return this._taskname;
    }
    get taskdueday() {
        return this._taskdueday;
    }
}

/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

function refreshDom() {
}
//THIS FUNCTION IS USED TO CAPTURE INPUT DATA INTO VARIABLE
function createTask(event) {
    //event preventdefault to retain data without losing it
    event.preventDefault();

    //function section to capture input data and push to tasks array
    console.log('runningCreateTask', event)
    const taskInput = document.getElementById("taskName").value;

    //conditional
    if (!taskInput) {
        alert("Please fill out the task!");
        return;
    }

    const dueDayInput = document.getElementById("dueDay").value;

    let task1 = new Task(taskInput, dueDayInput);
    return task1;

}
//THIS FUNCTION IS USED TO TAKE THE INPUT VARIABLE AND PUSH IT TO THE ARRAY

function addTask(task) {
    tasks.push(task);
    console.log("tasks are now:", tasks);
    refreshDom();
}
//THIS FUNCTION IS USED TO TAKE THE ARRAY AND PRINT ON DOM
function createDomTask() {
    //section to take data in array and push to DOM
    let domDiv = document.createElement("div");
    domDiv.classList.add("task");

    let domDivContent = document.createElement("div");
    domDivContent.classList.add("content");

    let taskNameText = document.createElement("input");
    taskNameText.classList.add("text");
    taskNameText.type = "text";
    taskNameText.value = task1._taskname;
    taskNameText.setAttribute("readonly", "readonly");

    //append children
    document.getElementById("taskList").appendChild(domDiv);

    domDiv.appendChild(domDivContent);
    domDivContent.appendChild(taskNameText);


    //adding due date values 
    let domDivContent2 = document.createElement("div");
    domDivContent2.classList.add("content");


    let taskDueDateText = document.createElement("input");
    taskDueDateText.classList.add("text");
    taskDueDateText.type = "text";
    taskDueDateText.value = task1._taskdueday;
    taskDueDateText.setAttribute("readonly", "readonly");

    //append children
    domDivContent2.appendChild(taskDueDateText);
    domDiv.appendChild(domDivContent2);

    document.getElementById("dueDay").value = "";

    //adding task buttons

    let taskActionsEl = document.createElement("div");
    taskActionsEl.classList.add("actions");

    let taskEditEl = document.createElement("button");
    taskEditEl.classList.add("edit");
    taskEditEl.innerHTML = "edit";

    let taskDeleteEl = document.createElement("button");
    taskDeleteEl.classList.add("delete");
    taskDeleteEl.innerHTML = "delete";
    //Please help me get checkbox outside of task?
    let taskCheckEl = document.createElement("input");
    taskCheckEl.classList.add("checkbox");
    taskCheckEl.type = "checkbox";
    taskCheckEl.name = "checkbox";
    taskCheckEl.value = "checkbox";

    taskActionsEl.appendChild(taskEditEl);
    taskActionsEl.appendChild(taskDeleteEl);
    taskActionsEl.appendChild(taskCheckEl);

    domDiv.appendChild(taskActionsEl);
    document.getElementById("taskName").value = "";
}
//THIS FUNCTION IS USED TO SORT ALPHABETICALLY
function sortTasks() {
    //sorting
    // tasks.sort((a, b) => {
    //     const taskA = a.taskname.toUpperCase(); // ignore upper and lowercase
    //     const taskB = b.taskname.toUpperCase(); // ignore upper and lowercase
    //     if (taskA < taskB) {
    //         return -1;
    //     }
    //     else if (taskA > taskB) {
    //         return 1;
    //     }

    //     // names must be equal
    //     return 0;
    // });

    refreshDom();
    console.log("tasks after sort:", tasks);

    //Sort array alphabetically
    // tasks.sort((a, b) => (a < b ? -1 : 1));
    // console.log(tasks);
}

//for loop to show how many tasks have been entered
//I need to update the array as well when bringing in LocalStorage
for (let x = 0; x < tasks.length; x++) {
    const element = tasks.length;
    console.log("Amount of tasks entered:", element)
}

//JSON and save to local storage
//making an object with tasks array inside
let myObj = { tasksArray: tasks };
console.log(myObj);
//turning the normal tasks array into JSON
let myJSArr = JSON.stringify(tasks);
console.log(myJSArr);
//turning the object with array inside to JSON
let myJSAarr2 = JSON.stringify(myObj);
console.log(myJSAarr2);

//localStorage
localStorage.setItem("userData", myJSArr);

/* ----------------------------------------------------
    Event Listeners
---------------------------------------------------- *///Is it okay to keep the below functionality here? it works.. or must I keep it outside of the function
taskEditEl.addEventListener('click', () => {
    if (taskEditEl.innerText.toLowerCase() == "edit") {
        taskNameText.removeAttribute("readonly");
        taskNameText.focus();
        taskDueDateText.removeAttribute("readonly");
        taskDueDateText.focus();
        taskEditEl.innerHTML = "Save";
        //how can I make this work?
        let updateArray = tasks.findIndex(Task);
    } else {
        taskNameText.setAttribute("readonly", "readonly");
        taskDueDateText.setAttribute("readonly", "readonly");
        taskEditEl.innerHTML = "Edit";
    }
});

taskDeleteEl.addEventListener('click', () => {
    taskList.removeChild(domDiv);
    let result = tasks.filter(deleteTask => tasks != Task);

    console.log("tasks after filter", result);

});

//Strikethrough text when checkbox is clicked (Completed task)
taskCheckEl.addEventListener('click', () => {
    if (taskCheckEl.checked == true) {
        domDivContent.style.textDecoration = "line-through";
        domDivContent2.style.textDecoration = "line-through";
    } else {
        domDivContent.style.textDecoration = "none";
        domDivContent2.style.textDecoration = "none";
    }
})

//below event listeners are to change the screen view
const addToDoTabHandler = () => {
    let addToDoElements = document.querySelectorAll(".toDoEntry");
    addToDoElements.forEach(element => {
        element.style.display = "none";

    });
    let toDoListElements = document.querySelectorAll(".toDoList");
    toDoListElements.forEach(element => {
        element.style.display = "block";
    });
}
addToDoTabButton.addEventListener("click", addToDoTabHandler);



const viewToDoTabHandler = () => {
    let addToDoElements = document.querySelectorAll(".toDoEntry");
    addToDoElements.forEach(element => {
        element.style.display = "block";

    });
    let toDoListElements = document.querySelectorAll(".toDoList");
    toDoListElements.forEach(element => {
        element.style.display = "none";

    });
}
viewToDoTabButton.addEventListener("click", viewToDoTabHandler);


