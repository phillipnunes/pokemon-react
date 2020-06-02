import axios from "axios";

const API_DOMAIN = "https://pokeapi.co/api/v2/";

function apiHelper() {
  const pokemon = {
    getPokemonByNameOrId: (nameOrId) =>
      axios.get(`${API_DOMAIN}pokemon/${nameOrId}`),
    getPokemonByAbility: (ability) =>
      axios.get(`${API_DOMAIN}ability/${ability}`),
  };

  return pokemon;
}

const api = apiHelper();
export default api;
