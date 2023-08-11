/**
 * URL to publically accessible pokeapi
 * Documentation at : https://pokeapi.co/
 */
const pokeDataUrl = "https://pokeapi.co/api/v2/pokemon";

/**
 * Retrieves a list of Pokemon.
 *
 * @param {Object} queryParams - An object containing query parameters.
 * @return {Promise<Array>} A promise that resolves to an array of Pokemon objects.
 */
async function listPokemon(queryParams) {
  let query = '';
  if (queryParams) {
    // Construct the query string
    query = Object.keys(queryParams).map((key) => `${key}=${queryParams[key]}`).join('&');
    query = `?${query}`;
  }

  try {
    // Fetch the Pokemon data
    const pokeDataResponse = await fetch(pokeDataUrl + query);
    const pokeData = await pokeDataResponse.json();

    // Fetch additional data for each Pokemon
    const pokePromises = pokeData.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();
      pokemon["img"] = pokemonData.sprites.front_default;
      return pokemon;
    });

    // Wait for all promises to resolve and return the results
    return Promise.all(pokePromises);
  } catch (e) {
    throw e;
  }
}

/**
 * Retrieves information about a specific Pokemon.
 *
 * @param {string} pokemon - The name of the Pokemon to retrieve information for.
 * @return {Object} An object containing the name, front and back sprites, and stats of the Pokemon.
 * @throws {Error} If the Pokemon is not found.
 */
async function getPokemon(pokemon) {
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
    stats: stats.reduce((acc, { stat, base_stat }) => {
      acc[stat.name] = base_stat;
      return acc;
    }, {}),
  };
  return pokemonInfo;
}

module.exports = {
  listPokemon,
  getPokemon,
};
