const pokeApi = {}

function convertPokeApiDetailToPokemon(pokemonDetail){
    const pokemon = new Pokemon()

    pokemon.number = pokemonDetail.order
    pokemon.name = pokemonDetail.name

    const types =  pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.imgs = pokemonDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
})

pokeApi.getPokemons = (OFFSET = 0,LIMIT = 10) => {
    const URL = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`;    
   return fetch(URL)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map((pokeApi.getPokemonDetail )))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
}

