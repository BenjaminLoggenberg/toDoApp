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

//THIS FUNCTION IS USED TO CAPTURE THE INPUT DATA AND PUSH IT TO THE ARRAY
function createTask(event) {

    //event preventdefault to retain data without losing it
    event.preventDefault();

    //function section to capture input data and push to tasks array
    console.log('runningCreateTask', event)
    const taskInput = document.getElementById("taskName").value;
    const dueDayInput = document.getElementById("dueDay").value;
    let task1 = new Task(taskInput, dueDayInput);
    tasks.push(task1);
    console.log("tasks are now:", tasks)

    //section to take data in array and push to DOM
    let domLi = document.createElement("li");
    //says undefined, should I print from the array? or should I print from element.value
    let taskNameText = document.createTextNode(task1._taskname);
    domLi.appendChild(taskNameText);


    //adding task description

    //adding task date





    document.getElementById("taskList").appendChild(domLi);
    //console.log taskname before empty
    console.log("taskName is now", document.getElementById("taskName").value);
    document.getElementById("taskName").value = "";

    //console.log after empty
    console.log("taskName is now", document.getElementById("taskName").value);

    //Placeholder to run domPrint() should option 2 be correct
    //  domPrint();
}


function domPrint() {
    let domDiv = document.createElement("div");
    let taskNameText = document.createTextNode(tasks.taskname);
    domDiv.appendChild(taskNameText);
    document.getElementById("taskList").appendChild(domDiv);

    document.getElementById("taskName").value = "";
    console.log("taskName is now", document.getElementById("taskName"));



}

//Potential create list in DOM

// let domTaskList = document.getElementById("taskList");
// let domLi = document.createElement("li");
// let taskNameText = document.createTextNode(tasks.taskname);
// domLi.appendChild(taskNameText);
// domTaskList.appendChild(domUl);





//Option 1 for 
// for (let x = 0; x < tasks.length; x++) {
//     let domUl = document.getElementById("taskUl");
//     let taskLi = document.createElement("li").class("list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2").innerHTML = tasks.taskname[x];
//     domUl.appendChild(taskLi);
// }

//Option 2
// function domPrint() {
//     let domUl = document.getElementById("taskUl");
//     let taskLi = document.createElement("li").class("list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2").innerHTML = tasks.taskname;
//     domUl.appendChild(taskLi);
// }

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
