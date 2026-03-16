window.addEventListener('load', init);


/**
 * Execute after document is fully loaded
 */
function init() {
    //Get the form & listen to submit event
    let form = document.getElementById('new-todo-form')
    form.addEventListener('submit', addItem);
}

/**
 * Add the new item to the list
 *
 * @param e
 */
function addItem(e) {
    e.preventDefault()

    let input = document.getElementById('todo-input').value;
    let ul = document.getElementById('todo')
    const li = document.createElement('li');
    li.innerText = input;
    ul.append(li);

}
