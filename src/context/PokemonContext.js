import { useReducer, useEffect, useState } from "react";
import api from "../shared/apiHelper";
import constate from "constate";
import logger from "./Logger";

const initialState = {
  request: {
    pokemons: [],
    loading: false,
  },
};

function reducer(state, action) {
  const { pokemons, param, type, error } = action;
  switch (type) {
    case "SET_POKEMONS_START":
      return {
        ...state,
        request: {
          param,
          loading: true,
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
  if (searchType === "name_or_id") {
    let array = [];
    const response = await api.getPokemonByNameOrId(param);
    array.push(response.data);
    return array;
  }
  if (searchType === "ability") {
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
  const { pokemons, loading, error } = request;

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

      const response = await handleApiMethod(param, searchType);

      dispatch({
        type: "SET_POKEMONS",
        pokemons: response,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: "SET_POKEMONS_FAIL",
        error: e.response,
      });
    }
  }

  return {
    setPokemons,
    pokemons,
    loading,
    error,
  };
}

export const [PokemonProvider, usePokemonContext] = constate(usePokemon);
