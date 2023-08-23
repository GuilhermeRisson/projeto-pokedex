const OFFSET = 0;
const LIMIT = 10;
const URL = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`;
const pokemonList = document.getElementById('pokemonList');

function convertPokemonTypestoLi(pokemonTypes){
    return pokemonTypes.map((typeSlot)=>`<li class="type">${typeSlot.type.name}</li>`)
}


function convertPokemonToLi(pokemon){
    return `  
    <li class="pokemon">

        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="datail">

            <ol class="types">
                ${pokemon.types.map((typeSlot)=>`<li class="type">${typeSlot}</li>`).join('')}
            </ol>
            
            <img src="${pokemon.imgs}" alt="${pokemon.name}">
        </div>
    </li>

    `

}

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})


