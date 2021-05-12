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