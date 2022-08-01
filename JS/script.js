/* --- Form field references ---*/
const taskInput = document.querySelector("#taskName").value;
const taskDescriptionInput = document.querySelector("#taskDescription").value;
const dueDayInput = document.querySelector("#dueDay").value;
const submitInput = document.querySelector("#submitInput").value;

/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */
let tasks = [];

function Task(taskname, taskdescription, taskdueday) {
    this._taskname = taskname;
    this._taskdescription = taskdescription;
    this._taskdueday = taskdueday;

}
let task1 = new Task('taskInput', 'taskDescriptionInput', 'dueDayInput');

tasks.push(task1);



//EVENT LISTENERS


submitInput.addEventListener("click", submitInputButton);

const submitInputButton = () => {
    Task();
}

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
