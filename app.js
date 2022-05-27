//selecteurs 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//ecouteurs

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//fonctions

function addTodo(event){
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //créer li 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // button check 
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check"></li>';
    completedBtn.classList.add("complete-btn");
    todoDiv.appendChild(completedBtn);
    // button supp
    const suppdBtn = document.createElement("button");
    suppdBtn.innerHTML = '<i class="fas fa-trash"></li>';
    suppdBtn.classList.add("supp-btn");
    todoDiv.appendChild(suppdBtn);
    //ajouter notre todo à todo-list
    todoList.appendChild(todoDiv);
    todoInput.value= "";
}

function deleteCheck(e) {
    const item = e.target;
    //delet todo
    if (item.classList[0] === "supp-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }
    //check 
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}



