interface PokemonFetchParams {
  limit?: number;
}

const pokemonService = () => {
  const POKEMON_API_URL = 'https://pokeapi.co/api/v2';
  const DEFAULT_LIST_COUNT = 20;

  const fetchPokemons = async ({
    limit = DEFAULT_LIST_COUNT,
  }: PokemonFetchParams) => {
    const response = await fetch(`${POKEMON_API_URL}/pokemon/?limit=${limit}`);
    const pokemons = await response.json();

    return pokemons.results;
  };

  const getPokemonURL = (pokemon: any): string => {
    const pattern = /(\d+)\/$/;
    const [, pokemonID] = pokemon.url.match(pattern);

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`;
  };

  return {fetchPokemons, getPokemonURL};
};

export {pokemonService};
