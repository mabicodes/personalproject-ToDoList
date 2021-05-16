const tasksection = document.querySelector("#tasklist");

function addTask(tasks) {
    tasks.forEach(task =>{
        const element =
            `<div class="taskText">
            <p class="task">${task.inputTask})
            </div>`;
        tasksection.insertAdjacentHTML("beforeend", element)
    } )
}

//2 funcion que pide las peliculas al bakcend
let loadTasks = () => {
    fetch("/task")
        .then(r => r.json())
        .then(addTask)
};

//1 no sé que hace pero se pone :v
document.addEventListener("DOMContentLoaded", loadMovies)