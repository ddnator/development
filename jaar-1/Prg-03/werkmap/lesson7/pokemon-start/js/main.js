window.addEventListener('load', init);
//Globals
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const gallery = document.getElementById('pokemon-gallery')
const pokemonPopup = document.getElementById('pokemon-detail')
const pokemonPopupClose = document.querySelector('.modal-close')
let popupTitle;
let popupImage;

/**
 * Initialize after the DOM is ready
 */
function init() {
    const cachedData = localStorage.getItem('pokemonData');
    if (cachedData) {
        const data = JSON.parse(cachedData);
        for (const pokemonData of data) {
            createPokemonCard(pokemonData);
        }
    } else {
        getPokemons();
    }
    const dialog = document.addEventListener('click',)

}

function getPokemons() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(getPokemonsSuccessHandler)
        .catch(getPokemonsErrorHandler);
}

function getPokemonsSuccessHandler(data) {
    getExtraPokemonData(data['results'])
}

function getPokemonsErrorHandler() {

}

async function getExtraPokemonData(data) {
    const pokemonDataArray = [];
    for (const pokemon of data) {
        try {
            const response = await fetch(pokemon.url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const pokemonData = await response.json();
            pokemonDataArray.push(pokemonData);
            createPokemonCard(pokemonData);
        } catch (error) {
            console.error('Error fetching pokemon data:', error);
        }
    }
    localStorage.setItem('pokemonData', JSON.stringify(pokemonDataArray));
}

function createPokemonCard(pokemonData) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonTitle = document.createElement('h2');
    const pokemonImage = document.createElement('img');
    const detailsButton = document.createElement('button')
    const pokemonID = pokemonData.id
    const pokemonImageShiny = pokemonData.sprites.front_shiny;
    console.log(pokemonData)

    detailsButton.classList.add('details-button')
    pokemonCard.append(detailsButton)
    detailsButton.textContent = 'Details'
    detailsButton.id = 'details-button'

    pokemonTitle.innerText = pokemonData.name;
    pokemonImage.src = pokemonData.sprites.other.home.front_default;

    pokemonCard.appendChild(pokemonTitle);
    pokemonCard.appendChild(pokemonImage);

    gallery.appendChild(pokemonCard);

    detailsButton.addEventListener("click", () => detailsButtonClickHandler(pokemonTitle, pokemonImageShiny, pokemonID))

}

function detailsButtonClickHandler(title, image, id) {

    pokemonPopup.showModal()
    popupTitle = document.createElement('h1');
    popupImage = document.createElement('img');

    popupTitle.textContent = `${title.textContent} ${id}`
    popupImage.src = image
    popupImage.alt = image.value


    pokemonPopup.appendChild(popupTitle)
    pokemonPopup.appendChild(popupImage)

    pokemonPopupClose.addEventListener('click', pokemonPopupCloseClickHandler)
}

function pokemonPopupCloseClickHandler() {
    pokemonPopup.removeChild(popupTitle);
    pokemonPopup.removeChild(popupImage)
    pokemonPopup.close();
}
