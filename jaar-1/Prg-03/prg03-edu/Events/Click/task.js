window.addEventListener('load', init);
window.addEventListener('li', changeColor)

/**
 * Execute after document is fully loaded
 */
function init() {
    let form = document.getElementById('new-todo-form');
    form.addEventListener('submit', formSubmitHandler);

    let li = document.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', liClickHandler)
    }
}

function liClickHandler(e) {
    let li = e.target;
    li.classList.add('yellow');
}

function changeColor() {

}

/**
 * Handler for the form submit event
 *
 * @param e
 */
function formSubmitHandler(e) {
    e.preventDefault(); //Leave this one out to see te result

    //Get value from input
    let textInput = document.getElementById('todo-input').value;

    //Retrieve the whole list
    let ul = document.getElementById('todo');

    //Create new li element
    let li = document.createElement('li');
    li.innerHTML = textInput;
    li.addEventListener('click', liClickHandler);
    //Empty the current form item so we can add another
    document.getElementById('todo-input').value = "";
    document.getElementById('message').innerHTML = textInput + " is toegevoegd";

    //Add item to the list
    ul.appendChild(li);
}

