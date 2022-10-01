// bring a info(tag, id, class, selector) 
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form Input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // localStorage.setItem(key, value);
}

function deleteToDo(event) {
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
    saveToDos();
}

// parameter in function is able to difference argument
// newToDoObj === newToDoInput
function paintToDo(newToDoInput) {
    const li = document.createElement("li");
    li.id = newToDoInput.id;
    const span = document.createElement("span");
    span.innerText = newToDoInput.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function toDoSubmit(event) {
    event.preventDefault();
    // refresh x
    const newToDoInput = toDoInput.value;
    // value into the variable 
    toDoInput.value = "";
    const newToDoObj = {
        id: Date.now(), // random value
        text: newToDoInput
    }
    toDos.push(newToDoObj);
    // newToDoObj -> newToDoInput
    paintToDo(newToDoObj);
    saveToDos();
    
}

toDoForm.addEventListener("submit", toDoSubmit);

/*함수명 변수명 증복 x **/
const savedToDos = localStorage.getItem(TODOS_KEY);


// 값들이 있을 때 다시 변수마다 painTODO 함수를 실행한다.
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // 덮어쓰지 않게 기존 값들을 저장
    parsedToDos.forEach(paintToDo);

}