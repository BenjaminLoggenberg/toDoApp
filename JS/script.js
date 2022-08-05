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

    //conditional
    if (!taskInput) {
        alert("Please fill out the task!");
        return;
    }

    const dueDayInput = document.getElementById("dueDay").value;

    let task1 = new Task(taskInput, dueDayInput);
    tasks.push(task1);
    console.log("tasks are now:", tasks)

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
    taskEditEl.classList.add("delete");
    taskDeleteEl.innerHTML = "delete";

    let taskCheckEl = document.createElement("input");
    taskCheckEl.type = "checkbox";

    taskActionsEl.appendChild(taskEditEl);
    taskActionsEl.appendChild(taskDeleteEl);
    taskActionsEl.appendChild(taskCheckEl);

    domDiv.appendChild(taskActionsEl);
    document.getElementById("taskName").value = "";


    //console.log taskname before empty
    //console.log("taskName is now", document.getElementById("taskName").value);

    //console.log after empty
    // console.log("taskName is now", document.getElementById("taskName").value);

    //Placeholder to run domPrint() should option 2 be correct
    //  domPrint();
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
