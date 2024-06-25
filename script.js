// CÓDIGO POKEAPI

const ol = document.querySelector('ol');

// Búcle para recorrer los 150 primeros pokémon
for (let id = 1; id <= 150; id++) {

    // Fetch para buscar los pokémon por id
    const getPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const res = await response.json();
        pokemonNewCard(res);
        // console.log(res);
    }

    const pokemonNewCard = (pokemon) => {

        // Creamos un li que será para cada card de cada pokémon
        const newLi = document.createElement('li');

        // Separamos los datos que vamos a querer de cada pokémon
        // pokemonName: busca el nombre del pokémon y lo pasa a mayúsculas
        // pokemonId: busca el id del pokémon
        // pokemonType: busca el tipo de pokemon
        const pokemonName = pokemon.name;
        const pokemonId = pokemon.id;
        const pokemonType1 = pokemon.types[0].type.name;
        const pokemonAbility1 = pokemon.abilities[0].ability.name;
        const pokemonAbility2 = pokemon.abilities[1].ability.name;
        const pokemonHeight = pokemon.height;
        const pokemonWeight = pokemon.weight;

        // Condicional para que agregue la imágen del tipo de pokemon dependiendo del valor de la variable "pokemonType"
        let typeImage;

        if (pokemonType1 == "grass") {
            typeImage = "../Pokemon/images/pokemon-types/grass.svg";
            typeAlt = "grass";
        } else if (pokemonType1 == "water") {
            typeImage = "../Pokemon/images/pokemon-types/water.svg";
            typeAlt = "water";
        } else if (pokemonType1 == "ghost") {
            typeImage = "../Pokemon/images/pokemon-types/ghost.svg";
            typeAlt = "ghost";
        } else if (pokemonType1 == "rock") {
            typeImage = "../Pokemon/images/pokemon-types/rock.svg";
            typeAlt = "rock";
        } else if (pokemonType1 == "electric") {
            typeImage = "../Pokemon/images/pokemon-types/electric.svg";
            typeAlt = "electric";
        } else if (pokemonType1 == "bug") {
            typeImage = "../Pokemon/images/pokemon-types/bug.svg";
            typeAlt = "bug";
        } else if (pokemonType1 == "normal") {
            typeImage = "../Pokemon/images/pokemon-types/normal.svg";
            typeAlt = "normal";
        } else if (pokemonType1 == "fire") {
            typeImage = "../Pokemon/images/pokemon-types/fire.svg";
            typeAlt = "fire";
        } else if (pokemonType1 == "poison") {
            typeImage = "../Pokemon/images/pokemon-types/poison.svg";
            typeAlt = "poison";
        } else if (pokemonType1 == "ice") {
            typeImage = "../Pokemon/images/pokemon-types/ice.svg";
            typeAlt = "ice";
        } else if (pokemonType1 == "dragon") {
            typeImage = "../Pokemon/images/pokemon-types/dragon.svg";
            typeAlt = "dragon";
        } else if (pokemonType1 == "ground") {
            typeImage = "../Pokemon/images/pokemon-types/ground.svg";
            typeAlt = "ground";
        } else if (pokemonType1 == "psychic") {
            typeImage = "../Pokemon/images/pokemon-types/psychic.svg";
            typeAlt = "psychic";
        } else if (pokemonType1 == "fighting") {
            typeImage = "../Pokemon/images/pokemon-types/fighting.svg";
            typeAlt = "fighting";
        } else if (pokemonType1 == "fairy") {
            typeImage = "../Pokemon/images/pokemon-types/fairy.svg";
            typeAlt = "fairy";
        }

        // Condicionales para el color de fondo dependiendo del tipo de pokemon
        let card_color;

        if (pokemonType1 == "grass") {
            card_color = "rgb(98, 188, 90, 0.9)";
        } else if (pokemonType1 == "water") {
            card_color = "rgb(77, 143, 214, 0.9)";
        } else if (pokemonType1 == "ghost") {
            card_color = "rgb(81, 105, 172, 0.95)";
        } else if (pokemonType1 == "rock") {
            card_color = "rgb(200, 182, 138, 0.9)";
        } else if (pokemonType1 == "electric") {
            card_color = "rgb(244, 210, 57, 0.9)";
        } else if (pokemonType1 == "bug") {
            card_color = "rgb(145, 192, 44, 0.95)";
        } else if (pokemonType1 == "normal") {
            card_color = "rgb(145, 152, 163, 0.9)";
        } else if (pokemonType1 == "fire") {
            card_color = "rgb(255, 155, 84, 0.9)";
        } else if (pokemonType1 == "poison") {
            card_color = "rgb(171, 106, 199, 0.9)";
        } else if (pokemonType1 == "ice") {
            card_color = "rgb(116, 207, 192, 0.9)";
        } else if (pokemonType1 == "dragon") {
            card_color = "rgb(10, 110, 197, 0.9)";
        } else if (pokemonType1 == "ground") {
            card_color = "rgb(217, 118, 69, 0.9)";
        } else if (pokemonType1 == "psychic") {
            card_color = "rgb(249, 112, 119, 0.9)";
        } else if (pokemonType1 == "fighting") {
            card_color = "rgb(204, 62, 105, 0.9)";
        } else if (pokemonType1 == "fairy") {
            card_color = "rgb(236, 145, 230, 0.9)";
        }

        // Constante con el contenido que queremos adicionar en HTML
        const pokemonContentHTML = `
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background-color: ${card_color}">
                                <p class="pokemon-number">${pokemonId}</p>
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
                                <p class="pokemon-name">${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</p>
                                <div class="container-types">
                                    <div class="pokemon-type">
                                        <img src=${typeImage} alt=${typeAlt}>
                                        <p>${pokemonType1.charAt(0).toUpperCase() + pokemonType1.slice(1)}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flip-card-back" style="background-color: ${card_color}">
                            <div class="abilities-title">
                            <h4 style="font-style: italic;">Habilidades</h4>
                                </div>
                                <div class="abilities">
                                    <p class="ability1">${pokemonAbility1.charAt(0).toUpperCase() + pokemonAbility1.slice(1)}</p>
                                    <p class="ability2">${pokemonAbility2.charAt(0).toUpperCase() + pokemonAbility2.slice(1)}</p>
                                </div>
                                <div class="height-weight">
                                    <div class="height">
                                        <h4 style="font-style: italic;">Altura</h4>
                                        <p>${pokemonHeight}</p>
                                    </div>
                                    <div class="weight">
                                        <h4 style="font-style: italic;">Peso</h4>
                                        <p>${pokemonWeight}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `

        // Agrega el contenido HTML arriba a la página
        newLi.innerHTML = pokemonContentHTML;

        // Le asignamos el contenido en NewLI al Ol existente en nuestro HTML
        ol.appendChild(newLi);


    }

    getPokemon();

}

/* INPUT AND SEARCH */

document.getElementById('searchInput').addEventListener('input', buscarPokemon);

function buscarPokemon() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const pokemons = document.querySelectorAll('.flip-card');

    pokemons.forEach((pokemon) => {
        const pokemonName = pokemon.querySelector('.pokemon-name').innerText.toLowerCase();

        if (searchTerm === '' || pokemonName.includes(searchTerm)) {
            pokemon.style.display = 'block';
        } else {
            pokemon.style.display = 'none';
        }
    });
}
