import { useReducer, useEffect, useState } from "react";
import api from "../shared/apiHelper";
import constate from "constate";
import logger from "./Logger";
import { filter } from "../shared/constants";

const initialState = {
  request: {
    pokemon: {},
    pokemons: [],
    loading: false,
    error: null,
  },
};

function reducer(state, action) {
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

const loggerReducer = logger(reducer);

function getIdFromUrl(url) {
  const res = url.split("/");
  const pos = res.indexOf("pokemon");
  return res[pos + 1];
}

async function handleApiMethod(param, searchType) {
  if (searchType === filter.byNameOrId) {
    const response = await api.getPokemonByNameOrId(param);
    return response.data;
  }
  if (searchType === filter.byAbility) {
    const response = await api.getPokemonByAbility(param);
    if (response.data) {
      const { data } = response;
      const filteredData = data.pokemon.map((item) => {
        const { url, name } = item.pokemon;
        return {
          id: getIdFromUrl(url),
          name,
        };
      });

      return filteredData;
    }
  }
}

function usePokemon() {
  const [data, setData] = useState(initialState);
  const [state, dispatch] = useReducer(loggerReducer, data);

  useEffect(() => {
    setData(state);
  }, [state, setData]);

  const { request } = state;
  const { pokemon, pokemons, loading, error } = request;

  async function setPokemons(param, searchType) {
    if (!param || !searchType) {
      console.log("No param or search type informed");
      return;
    }

    try {
      dispatch({
        type: "SET_POKEMONS_START",
        param,
      });

      const response = await handleApiMethod(param.toLowerCase(), searchType);
      const propName =
        searchType === filter.byNameOrId ? "pokemon" : "pokemons";

      dispatch({
        type: "SET_POKEMONS",
        [propName]: response,
      });
    } catch (e) {
      dispatch({
        type: "SET_POKEMONS_FAIL",
        error: e.response,
      });
    }
  }

  return {
    setPokemons,
    pokemon,
    pokemons,
    loading,
    error,
  };
}

export const [PokemonProvider, usePokemonContext] = constate(usePokemon);
