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
