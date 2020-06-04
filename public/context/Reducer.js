export default function reducer(state, action) {
  const { pokemon, pokemons, param, type, error } = action;
  switch (type) {
    case "SET_POKEMONS_START":
      return {
        ...state,
        request: {
          param,
          loading: true,
          error: null,
          pokemon: {},
          pokemons: [],
        },
      };
    case "SET_POKEMONS_FAIL":
      return {
        ...state,
        request: {
          error,
          loading: false,
        },
      };
    case "SET_POKEMONS":
      return {
        ...state,
        request: {
          pokemon,
          pokemons,
          loading: false,
        },
      };
    default:
      return state;
  }
}
