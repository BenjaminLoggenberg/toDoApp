taskText = localStorage.getItem("userData");
console.log(JSON.parse(localStorage.getItem('userData')));
localStorageArray = JSON.parse(taskText);
let taskList = document.getElementById("taskList");

window.addEventListener('DOMContentLoaded', () => {
    refreshDom();
});
//array to push all the tasks to
let tasks = localStorageArray || [];


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
    // get taskname() {
    //     return this._taskname;
    // }
    // get taskdueday() {
    //     return this._taskdueday;
    // }
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
    console.log('tasks within refreshDom is', tasks);
    taskList.innerHTML = "";

    //Clear DOM elements when task is added
    //loop through tasks array and print to DOM accordingly
    //section to take data in array and push to DOM
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        taskList.innerHTML += `
    <div class="task" id = "${task._taskId}">
             <div class="content">
            <input type="text" class="text taskName" value="${task._taskname}" readonly>
            <input type="text" class="text dueDay" value="${task._taskdueday}" readonly>
            </div>
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
    event.preventDefault();
    //function section to capture input data and push to tasks array
    console.log('runningCreateTask', task)
    let taskInput = document.getElementById("taskName").value;

    //conditional
    if (!taskInput) {
        alert("Please fill out the task!");
        return;
    }

    let dueDayInput = document.getElementById("dueDay").value;

    let task1 = new Task(taskInput, dueDayInput);
    addTask(task1);


}
//THIS FUNCTION IS USED TO TAKE THE INPUT VARIABLE AND PUSH IT TO THE ARRAY

function addTask(task) {
    tasks.push(task);
    console.log("tasks are now:", tasks);
    sortTasks();
    console.log(tasks);
    let myJSArr = JSON.stringify(tasks);
    localStorage.setItem("userData", myJSArr);
    console.log('the JSON is now', myJSArr);
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
        const taskA = a._taskname.toUpperCase(); // ignore upper and lowercase
        const taskB = b._taskname.toUpperCase(); // ignore upper and lowercase
        if (taskA < taskB) {
            return -1;
        }
        else if (taskA > taskB) {
            return 1;
        }
        // names must be equal
        return 0;
    });

    console.log("tasks after sort:", tasks);

    //Sort array alphabetically
    // tasks.sort((a, b) => (a < b ? -1 : 1));
    // console.log(tasks);
}

//JSON and save to local storage

//turning the normal tasks array into JSON
let myJSArr = JSON.stringify(tasks);
console.log(myJSArr);

//localStorage
localStorage.setItem("userData", myJSArr);




/* ----------------------------------------------------
    Event Listeners
---------------------------------------------------- *///Is it okay to keep the below functionality here? it works.. or must I keep it outside of the function
//for checkbox
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains("tickTask")) {
        let checkButton = e.target;
        console.log(checkButton);
    }
});

function loopOverNodes(node) {
    // do some thing with the node here
    let nodes = node.childNodes;
    console.log(nodes)
    for (var i = 0; i < nodes.length; i++) {
        if (node[i].classList.contains("text")) {
            return node[i];
        }
    }
}
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains("edit")) {
        let editButton = e.target;
        let selectedElId = e.target.parentNode.parentNode.id;
        let taskObj = document.getElementById(selectedElId);
        console.log(taskObj);
        taskNameText = loopOverNodes(taskObj);
        console.log(taskNameText);
        if (editButton.innerText.toLowerCase() == "edit") {
            taskObj.removeAttribute("readonly");
            taskObj.focus();
            taskDueDateText.removeAttribute("readonly");
            taskDueDateText.focus();
            editButton.innerHTML = "Save";
            //how can I make this work?
            let updateArray = tasks.findIndex(Task);
        } else {
            taskObj.setAttribute("readonly", "readonly");
            taskDueDateText.setAttribute("readonly", "readonly");
            editButton.innerHTML = "Edit";
        }
        console.log(editButton);
    }
})

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains("delete")) {
        let deleteButton = e.target;
        console.log(deleteButton);
        let selectedElId = e.target.parentNode.parentNode.id;
        tasks = tasks.filter(task => task._taskId != selectedElId);

        //localStorage
        localStorage.setItem("userData", JSON.stringify(tasks));
        refreshDom();
    }
})


// taskEditEl.addEventListener('click', () => {

// });

// taskDeleteEl.addEventListener('click', () => {

// });

//Strikethrough text when checkbox is clicked (Completed task)
// checkButton.addEventListener('click', () => {
//     if (checkButton.checked == true) {
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


