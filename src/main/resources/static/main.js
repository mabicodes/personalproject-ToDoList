const tasksection = document.querySelector("#tasklist");

//3 funcion que agrega un div con un texto de lo q escribio el usuario
function addTask(tasks) {
    tasks.forEach(task =>{
        const element =
            `<div class="taskText">
            <p class="task">${task.inputTask})
            </div>`;
        tasksection.insertAdjacentHTML("beforeend", element)
    } )
}

//2 funcion que pide al bakcend lo que hemos escrito en el form
let loadTasks = () => {
    fetch("/task")
        .then(r => r.json())
        .then(addTask)
};

//1 no sé que hace pero se pone :v
document.addEventListener("DOMContentLoaded", loadTasks)