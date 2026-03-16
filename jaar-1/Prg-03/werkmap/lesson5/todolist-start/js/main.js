window.addEventListener('load', init);
let newItem;
let list;
let todos;

/**
 * Initialize the application
 */
function init() {
    const form = document.getElementById('todo-form');
    form.addEventListener('submit', formSubmitHandler);
    setList()

    list.addEventListener('click', formClickHandler);
}

function setList() {
    todos = localStorage.getItem('todos');
    todos = JSON.parse(todos);

    if (!todos) {
        localStorage.setItem('todos', '[]')
        todos = [];
    } else {
        for (const todo of todos) {
            addToList(todo);
        }
    }
}

function formSubmitHandler(e) {
    e.preventDefault();
    newItem = document.getElementById('todo-field');
    addToList(newItem.value);
    addToLocalStorage(newItem.value);
}

function addToList(text) {
    list = document.getElementById('list');
    const item = document.createElement('li');
    item.textContent = text;
    list.append(item);
}

function addToLocalStorage(text) {
    todos.push(text);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function formClickHandler(e) {
    const li = e.target

    if (li.nodeName === "LI") {
        li.remove();
        localStorage.removeItem(li);
    }
}