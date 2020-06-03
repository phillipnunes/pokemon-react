import React, { useState, useEffect } from "react";
import { usePokemonContext } from "../../context/PokemonContext";
import Search from "../Search/Search";
import Cards from "../Cards/Cards";
import { filter } from "../../shared/constants";
import pokeball from "../../assets/pokeball.png";
import FilterOptions from "../FilterOptions/FilterOptions";
import "./Home.scss";
import { findAndReplace } from "../../shared/utils";

export default function Home() {
  const [searchOption, setSearchOption] = useState(filter.byNameOrId);
  const [hasData, setHasData] = useState(false);
  const {
    pokemon,
    pokemons,
    setPokemons,
    loading,
    error,
  } = usePokemonContext();
  let delayTimer;

  useEffect(() => {
    showPageIfHasData();
  }, [pokemon, pokemons]);

  function showPageIfHasData() {
    if ((pokemons && pokemons.length > 0) || (pokemon && pokemon.id)) {
      setHasData(true);
      return;
    }

    setHasData(false);
  }

  function handleSearch(value) {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      setPokemons(value, searchOption);
    }, 500);
  }

  function formatSearchPlaceholder() {
    return `Search by ${findAndReplace(searchOption, "_", " ")}`;
  }

  return (
    <div className="Home">
      <h1 className="Home__title">What Pokemon are you looking for?</h1>
      <div className="Home__search-options">
        <FilterOptions
          selectedOption={searchOption}
          onChange={(value) => setSearchOption(value)}
        />
      </div>
      <Search
        onChange={(value) => handleSearch(value)}
        placeholder={formatSearchPlaceholder()}
      />
      {error && <p className="Home__message">Error searching. Try again.</p>}
      {hasData && <Cards data={pokemons || pokemon} />}
      <img
        src={pokeball}
        alt="Pokeball"
        className={`Home__background ${
          loading ? "Home__background--animated " : ""
        }`}
      />
    </div>
  );
}
