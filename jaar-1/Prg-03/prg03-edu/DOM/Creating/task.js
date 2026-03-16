//Get the button & add event
let button = document.getElementById('button');
button.addEventListener('click', addItem);

/**
 * Add the new item to the list
 */
function addItem() {
    let ul = document.getElementById('todo');
    console.log(ul);
    let li = document.createElement("li");
    li.innerHTML = "Watch the new X-Files";
    ul.appendChild(li);
}
