// const urlDetail = `https://pokeapi.co/api/v2/pokemon/1` 

const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    console.log(pokeDetail);

    const pokemon = new PokemonDetail()

    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight

    const abiliti = pokeDetail.abilities.map((abili) => abili.ability.name)
    pokemon.abilities = abiliti

    // console.log(pokemon);
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {

    console.log(pokemon);
    // return fetch(pokemon.url)
    //     .then((response) => response.json())
    //     .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => convertPokeApiDetailToPokemon(jsonBody))
        // .then((pokemons) => pokeApi.getPokemonDetail(pokemons))
        // .then((detailRequests) => Promise.all(detailRequests))
        // .then((pokemonsDetails) => pokemonsDetails)
}