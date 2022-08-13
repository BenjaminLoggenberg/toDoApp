taskText = localStorage.getItem("userData");
console.log(JSON.parse(localStorage.getItem('userData')));
localStorageArray = JSON.parse(taskText);
let taskList = document.getElementById("taskList");

window.addEventListener('DOMContentLoaded', () => {
    refreshDom();
});
//array to push all the tasks to
let tasks = localStorageArray || [];




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
            <input type="text" id = "${task._taskId}" class="text taskName" value="${task._taskname}" readonly>
            <input type="text" id = "${task._taskId}" class="text dueDay" value="${task._taskdueday}" readonly>
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

    //Another way to do it below
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
---------------------------------------------------- *///
//for checkbox
// Strikethrough text when checkbox is clicked (Completed task)
// taskList.addEventListener('click', (e) => {
//     let checkboxEl = e.target.parentNode.parentNode.id;
//     if (e.target.classList.contains("tickTask") && checkboxEl.checked == true) {
//         e.target.closest("input").style.textDecoration = "line-through";
//     } else {
//         e.target.closest("input").style.textDecoration = "none";
//     }
// });


taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains("edit")) {
        let editButton = e.target;
        let selectedElId = e.target.parentNode.parentNode.id;

        // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< UPDATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

        /* ==== INFO ====
         * Used the unique ids of the two input fields to make DOM queries and attribute manipulation easier
        */

        let taskNameText = document.getElementById(selectedElId + "TaskName");
        let taskDueDateText = document.getElementById(selectedElId + "TaskDueDate");

        console.log(taskNameText);


        taskNameText.removeAttribute("readonly");
        taskNameText.focus();

        taskDueDateText.removeAttribute("readonly");
        taskDueDateText.focus();
        editButton.innerHTML = "Save";

        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATED >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        if (editButton.innerText.toLowerCase() == "edit") {

            //how can I make this work?

            /** ---  Notes: ---
             * 
             * You can make this work by putting it in the else clause
             * since that is what runs while we after we are done editing.
             * Once done editing we can set the attributes back to read-only
             * and then also update the object's data inside our array and
             * localStorage
             */

            //let updateArray = tasks.findIndex(Task);

        } else {

            // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< UPDATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

            // if this is 0 storage wont be updated
            // if this get updated to 1, storage will be updated
            let updateNeeded = 0;

            tasks.forEach(task => {
                if (task._taskId == selectedElId) { // pull task out of array if id is == id of DOM element
                    // console.log(task);

                    // Update task with data in DOM
                    task._taskname = taskNameText.value;
                    // Update date with data in DOM
                    task._taskdueday = taskDueDateText.value;

                    // test to see if task data was updated
                    //console.log(task);
                    updateNeeded = 1;
                }
            })

            if (updateNeeded == 1) {

                //turning the normal tasks array into JSON
                let myJSArr = JSON.stringify(tasks);
                console.log(myJSArr);

                //localStorage
                localStorage.setItem("userData", myJSArr);

            }

            // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATED >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

            taskNameText.setAttribute("readonly", "readonly");
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


