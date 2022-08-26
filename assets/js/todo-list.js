var tastList = document.querySelector(".task__list");
var taskForm = document.querySelector(".task__input");
var taskInput = document.querySelector(".task__input-field");
var taskBtn = document.querySelector(".task__input-btn")

document.querySelector(".new__task").addEventListener("click", function(){
    taskForm.classList.add("active");
});

taskForm.addEventListener("submit", function(event){
    event.preventDefault();
    let taskVal = taskInput.value.trim();
    if (taskVal){
        addTodoElement({
            text: taskVal
        });
    };
    document.querySelector(".task__input").classList.remove("active");
    taskInput.value = '';
});

function addTodoElement(todo) {
    var li = document.createElement("li");
    li.classList.add("task__list-item");
    li.innerHTML = '<div class="task__list-wrapper"><input type="radio"><div class="task__list-checked"></div></div><div class="task__list-text">' + todo.text + '</div><div class="task__list-remove"><i class="fa-solid fa-trash-can task__list-remove-icon"></i></div>'
    tastList.appendChild(li);
    document.querySelector(".task__list-checked").addEventListener("click", function(){
        if (this.getAttribute("class") == "task__list-checked"){
            this.classList.add("active");
        }else{
            this.classList.remove("active");
        };
    });
    li.querySelector(".task__list-remove").addEventListener("click", function(){
        this.parentElement.remove()
    });
};