/* --- Form field references ---*/



//const taskInputValue = taskInput.value;
/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

//array to push all the tasks to
let tasks = [];


//THIS FUNCTION THAT IS COMMENTED OUT WAS ANOTHER ATTEMPT TO CAPTURE THE INPUT
// function createTask(taskInput) {
//     taskInput = document.getElementById("taskName").value;
//     return taskInput;
// }

//THIS CLASS IS USED TO CAPTURE THE INPUT DATA

class Task {
    constructor(taskname, taskdescription, taskdueday) {
        this._taskname = taskname;
        this._taskdescription = taskdescription;
        this._taskdueday = taskdueday;
    }
    get taskname() {
        return this._taskname;
    }
    get taskdescription() {
        return this._taskdescription;
    }
    get taskdueday() {
        return this._taskdueday;
    }
}

//THIS FUNCTION IS USED TO CAPTURE THE INPUT DATA AND PUSH IT TO THE ARRAY
function createTask(event) {
    event.preventDefault();
    console.log('runningCreateTask', event)
    const taskInput = document.getElementById("taskName").value;
    const taskDescriptionInput = document.getElementById("taskDescription").value;
    const dueDayInput = document.getElementById("dueDay").value;
    let task1 = new Task(taskInput, taskDescriptionInput, dueDayInput);
    tasks.push(task1);
    console.log("tasks are now:", tasks)
    domPrint();
}

//Option 1
for (let x = 0; x < tasks.length; x++) {
    let domUl = document.getElementById("taskUl");
    let taskLi = document.createElement("li").class("list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2").innerHTML = tasks.taskname[x];
    domUl.appendChild(taskLi);
}

//Option 2
function domPrint() {
    let domUl = document.getElementById("taskUl");
    let taskLi = document.createElement("li");
    taskLi.class("list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2").innerHTML = tasks.taskname;
    domUl.appendChild(taskLi);
}

//EVENT LISTENERS

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
