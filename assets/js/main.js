
//poniendo eventlisteners a los botones
let addButton = document.getElementById("add-buton");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    let itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

let clearButton = document.getElementById("eliminartarea-button")
clearButton.addEventListener("click", clearCompletedToDoItems);
function clearCompletedToDoItems() {
    alert('Tarea eliminado de la lista!');
}

let emptyButton = document.getElementById("empty-button")
emptyButton.addEventListener("click", emptyList);
function emptyList() {
    alert('Ya no hay nada en tu lista!');
}

let saveButton = document.getElementById("save-button")
saveButton.addEventListener("click", saveList);
function saveList() {
    alert('Lista guardada!');
}





//doms para seleccionar en lista de tascas
const toDoEntryBox = document.getElementById("lista-entrybox");
let toDoList = document.getElementById("lista-tareas");

//esta funcion agrega items en la lista
function newToDoItem(itemText, completed){
    //creando un item en la lista
    let toDoItem = document.createElement("li");
    //crea un contenedor dentro del html pra la lista
    let toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    //agregando logica. si la tarea esta completada..
    if (completed) {
        toDoItem.classList.add("completed");
    }
    //agrega el item en la lista ordenada
    toDoList.appendChild(toDoItem);
    //cuando haces doble click a un item deberia funcionar el toggle en el
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}



//esta funcion deja el usuario markar las tascas completadas o borrar
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}
