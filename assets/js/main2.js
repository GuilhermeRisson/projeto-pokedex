const ID = 1

function loadPokemonItens(ID) {
    pokeApi.getPokemons(ID).then((pokemons = []) => {
        console.log();
        
    })
}

loadPokemonItens(ID)