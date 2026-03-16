window.addEventListener('load', init);

//Global variables
let imageList = ['ballonnen', 'cars', 'planes', 'goudkistje'];
let playing_field;
let previouslyClickedItem;
let form;
let guessedNumber;

/**
 * Initialize after the DOM is ready
 */
function init() {
    playing_field = document.getElementById('playing-field');
    guessedNumber = document.getElementById('guess-number');
    createPlayField();
    playing_field.addEventListener('click', playingFieldClickHandler);
    form = document.getElementById('play-form');
    form.addEventListener('submit', formSubmitHandler)
}


/**
 * Generate the playing field dynamically with all the available images
 */
function createPlayField() {
    let i = 0;
    shuffleArray(imageList);
    for (const image of imageList) {
        const item = document.createElement('div');
        const cardTitle = document.createElement('h2');
        let img = document.createElement('img');
        item.classList.add("playing-card");
        cardTitle.textContent = i.toString();

        img.src = `img/vraagteken-plaatjes.png`;
        img.dataset.imageIndex = i;
        img.alt = `Afbeelding van vraagteken`;
        item.append(cardTitle);
        item.append(img);
        playing_field.append(item);
        i++;
        //img.addEventListener('click', imgClickHandler);

        //function imgClickHandler(e) {
        //    img.src = `img/${image}.png`
        //}
    }
}

/**
 * Show the card by its front so the player knows whats going on
 *
 * @param e
 */
function playingFieldClickHandler(e) {
    let image = e.target;

    if (previouslyClickedItem) {
        previouslyClickedItem.src = `img/vraagteken-plaatjes.png`;
        previouslyClickedItem.alt = 'Afbeelding van vraagteken';
    }
    if (image.nodeName === 'IMG') {
        image.src = `img/${imageList[image.dataset.imageIndex]}.png`;
        image.dataset.isQuestionMark = 'false';
        image.alt = `Afbeelding van ${imageList[image.dataset.imageIndex]}`;
        console.log(image.dataset.imageIndex);
    } else {
        return;
    }
    previouslyClickedItem = image;
}

/**
 * Handler for when the form is submitted
 *
 * @param e
 */
function formSubmitHandler(e) {
    e.preventDefault();

    console.log(e.target);
    console.log(guessedNumber.value);
}

/**
 * Write text for the user as feedback of their answer
 *
 * @param text
 */
function writeFeedbackMessage(text) {

}

/**
 * Randomize array using sort
 * @param array
 * @returns {*}
 */
function shuffleArray(array) {
    return array.sort(() => (Math.random() - 0.5));
}
