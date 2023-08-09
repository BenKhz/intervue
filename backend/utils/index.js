const pokeDataUrl = "https://pokeapi.co/api/v2/pokemon";

/**
 * Retrieves a list of Pokemon.
 *
 * @return {Promise<Array>} A promise that resolves to an array of Pokemon objects.
 */
async function listPokemon() {
  try {
    const response = await fetch(pokeDataUrl + "?limit=151");
    const pokemons = await response.json();
    const pokePromises = pokemons.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      pokemon["img"] = data.sprites.front_default;
      return pokemon;
    });

    return Promise.all(pokePromises);
  } catch (e) {
    throw e;
  }
}

/**
 * Retrieves information about a specific Pokemon.
 *
 * @param {string} pokemon - The name of the Pokemon to retrieve information for.
 * @return {Promise} A promise that resolves to an object containing the name, front and back sprites, and stats of the Pokemon.
 */
async function getPokemon(pokemon) {
  try {
    const response = await fetch(`${pokeDataUrl}/${pokemon}`);
    if (response.status >= 400) {
      throw new Error("Pokemon not found");
    }
    const pokemonData = await response.json();
    const { name, sprites, stats } = pokemonData;
    const pokemonInfo = {
      name,
      front: sprites.front_default,
      back: sprites.back_default,
      stats: stats.reduce((acc, stat) => {
        acc[stat.stat.name] = stat.base_stat;
        return acc;
      }, {}),
    };
    return pokemonInfo;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  listPokemon,
  getPokemon,
};
