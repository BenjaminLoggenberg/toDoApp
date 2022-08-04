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

//THIS CLASS IS AN ATTEMPT TO CAPTURE INPUT DATA


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


//I was unsure if I could capture the value of the input here or place the below variables at the top of my code
//Is it better to use querySelector or getElementBy ID to capture string values?
function createTask(event) {
    event.preventDefault();
    console.log('runningCreateTask', event)
    const taskInput = document.getElementById("taskName").value;
    const taskDescriptionInput = document.getElementById("taskDescription").value;
    const dueDayInput = document.getElementById("dueDay").value;
    let task1 = new Task(taskInput, taskDescriptionInput, dueDayInput);
    tasks.push(task1);
}

// document.addEventListener('DOMContentLoaded', () = > {
//     document.getElementById('submitInput').addEventListener('submit', createTask)
// })
//document.getElementById('submitInput').onclick = function () {
//  document.getElementById('task1Dom').innerHTML = tasks.taskInput;
//}

//Is it possible to create new Object within a function like the one below?

//let task1 = new Task(taskInput, taskDescriptionInput, dueDayInput);
//or should you call it straight like this: 
//let task1 = new Task(taskInput, taskDescriptionInput, dueDayInput);


// tasks.push(task1);
//I keep getting errors that taskInput is already defined or it can't get the value it seems?


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
