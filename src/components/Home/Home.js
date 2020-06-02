import React, { useState, useEffect } from "react";
import { usePokemonContext } from "../../context/PokemonContext";
import Search from "../Search/Search";
import Cards from "../Cards/Cards";
import { filter } from "../../shared/constants";
import pokeball from "../../assets/pokeball.png";
import "./Home.scss";

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
    if ((pokemons && pokemons.length > 0) || (pokemon && pokemon.id)) {
      setHasData(true);
      return;
    }

    setHasData(false);
  }, [pokemon, pokemons]);

  function handleSearch(value) {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      setPokemons(value, searchOption);
    }, 500);
  }

  function formatSearchPlaceholder() {
    let optionText = searchOption.replace(/_/g, " ");
    return `Search by ${optionText}`;
  }

  return (
    <div className="Home">
      <h1 className="Home__title">What Pokemon are you looking for?</h1>
      <div className="Home__search-options">
        <label className="Home__search-option" htmlFor={filter.byNameOrId}>
          <input
            checked={searchOption === filter.byNameOrId}
            value={filter.byNameOrId}
            onChange={(event) => setSearchOption(event.target.value)}
            name="search_option"
            className="Home__search-option-input"
            type="radio"
            id={filter.byNameOrId}
          />
          Name or Id
        </label>
        <label className="Home__search-option" htmlFor={filter.byAbility}>
          <input
            checked={searchOption === filter.byAbility}
            value={filter.byAbility}
            onChange={(event) => setSearchOption(event.target.value)}
            name="search_option"
            className="Home__search-option-input"
            type="radio"
            id={filter.byAbility}
          />
          Ability
        </label>
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
