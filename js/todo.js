const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form Input")
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
}

function paintToDo(newToDoInput) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDoInput;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function toDoSubmit(event) {
    event.preventDefault();
    const newToDoInput = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDoInput);
}

toDoForm.addEventListener("submit", toDoSubmit);