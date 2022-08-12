taskText = localStorage.getItem("userData");
newObj = JSON.parse(taskText);

window.addEventListener('DOMContentLoaded', () => {
    refreshDom();
});
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
        this._taskId = Math.floor(Math.random() * 10000);
    }
    get taskname() {
        return this._taskname;
    }
    get taskdueday() {
        return this._taskdueday;
    }
    set taskId(idName) {
        this._taskId = idName;
    }
    get taskId() {
        return this._taskId;
    }
}

/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

function refreshDom() {

    let taskList = document.getElementById("taskList")
    taskList.innerHTML = "";

    //Clear DOM elements when task is added
    //loop through tasks array and print to DOM accordingly
    //section to take data in array and push to DOM
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        taskList.innerHTML += `
        <div class="task" id = "${task.taskId}">
             <div class="content">
            <input type="text" class="text" value="${task.taskname}" readonly>
        </div>
        <!--Buttons to edit and delete task->
        <div class="actions">
            <input class="tickTask" type="checkbox">
            <button class="edit">EDIT</button>
            <button class="delete">DELETE</button>
        </div>
    </div>
    `
    }

}
//THIS FUNCTION IS USED TO CAPTURE INPUT DATA INTO VARIABLE
function createTask(task) {
    //event preventdefault to retain data without losing it
    event.preventDefault();

    //function section to capture input data and push to tasks array
    console.log('runningCreateTask', task)
    const taskInput = document.getElementById("taskName").value;

    //conditional
    if (!taskInput) {
        alert("Please fill out the task!");
        return;
    }

    const dueDayInput = document.getElementById("dueDay").value;

    let task1 = new Task(taskInput, dueDayInput);
    addTask(task1);
}
//THIS FUNCTION IS USED TO TAKE THE INPUT VARIABLE AND PUSH IT TO THE ARRAY

function addTask(task) {
    tasks.push(task);
    console.log("tasks are now:", tasks);

    refreshDom();
}
//THIS FUNCTION IS USED TO TAKE THE ARRAY AND PRINT ON DOM
// function createDomTask() {

//     refreshDom();


// }
//THIS FUNCTION IS USED TO SORT ALPHABETICALLY
function sortTasks() {

    //sorting
    tasks.sort((a, b) => {
        const taskA = a.taskname.toUpperCase(); // ignore upper and lowercase
        const taskB = b.taskname.toUpperCase(); // ignore upper and lowercase
        if (taskA < taskB) {
            return -1;
        }
        else if (taskA > taskB) {
            return 1;
        }
        // names must be equal
        return 0;
    });

    refreshDom();
    console.log("tasks after sort:", tasks);

    //Sort array alphabetically
    // tasks.sort((a, b) => (a < b ? -1 : 1));
    // console.log(tasks);
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
// taskEditEl.addEventListener('click', () => {
//     if (taskEditEl.innerText.toLowerCase() == "edit") {
//         taskNameText.removeAttribute("readonly");
//         taskNameText.focus();
//         taskDueDateText.removeAttribute("readonly");
//         taskDueDateText.focus();
//         taskEditEl.innerHTML = "Save";
//         //how can I make this work?
//         let updateArray = tasks.findIndex(Task);
//     } else {
//         taskNameText.setAttribute("readonly", "readonly");
//         taskDueDateText.setAttribute("readonly", "readonly");
//         taskEditEl.innerHTML = "Edit";
//     }
// });

// taskDeleteEl.addEventListener('click', () => {
//     taskList.removeChild(domDiv);
//     let result = tasks.filter(deleteTask => tasks != Task);

//     console.log("tasks after filter", result);

// });

// //Strikethrough text when checkbox is clicked (Completed task)
// taskCheckEl.addEventListener('click', () => {
//     if (taskCheckEl.checked == true) {
//         domDivContent.style.textDecoration = "line-through";
//         domDivContent2.style.textDecoration = "line-through";
//     } else {
//         domDivContent.style.textDecoration = "none";
//         domDivContent2.style.textDecoration = "none";
//     }
// })

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


