window.addEventListener('load', init);

//Globals
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
let gallery;
let pokemonDetails;

/**
 * Initialize after the DOM is ready
 */
function init() {
    getPokemons();

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
    createPokemonCardDiv(data);
}

function getPokemonsErrorHandler(data) {
    console.error(data);
}

function pokemonAjaxRequest(pokemonUrl) {
    fetch(pokemonUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(pokemonAjaxRequestSuccessHandler)
        .catch(pokemonAjaxRequestErrorHandler);
}

function pokemonAjaxRequestSuccessHandler(data) {
    getPokemonDetails(data);
}


function pokemonAjaxRequestErrorHandler(data) {
    console.error(data);
}

function createPokemonCardDiv(data) {
    gallery = document.getElementById('pokemon-gallery');
    for (let pokemon of data['results']) {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card')
        const name = document.createElement('h2');
        name.textContent = data;
        pokemonCard.append(pokemon.name);

        pokemonCard.dataset.name = pokemon.name;
        pokemonAjaxRequest(pokemon.url);


        gallery.append(pokemonCard);


    }
}

function getPokemonDetails(data) {

    let img = document.createElement('img')
    img.src = data.sprites.other.home.front_default;

    const pokemonCard = document.querySelector(`.pokemon-card[data-name = '${data.name}']`);
    pokemonCard

    console.log(pokemonCard)
    gallery.append(img)

}