import React, { useState } from "react";
import { usePokemonContext } from "../../context/PokemonContext";
import Search from "../Search/Search";
import Cards from "../Cards/Cards";
import pokeball from "../../assets/pokeball.png";
import "../../shared/global.scss";
import "./App.scss";

export default function App() {
  const [searchOption, setSearchOption] = useState("name_or_id");
  const { pokemons, setPokemons, loading, error } = usePokemonContext();
  let delayTimer;

  function handleSearch(value) {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(async function () {
      setPokemons(value, searchOption);
    }, 500);
  }

  function formatSearchPlaceholder() {
    let optionText = searchOption.replace(/_/g, " ");
    return `Search by ${optionText}`;
  }

  return (
    <div className="App">
      <h1 className="App__title">What Pokemon are you looking for?</h1>
      <div className="App__search-options">
        <label className="App__search-option" htmlFor="name_or_id">
          <input
            checked={searchOption === "name_or_id"}
            value="name_or_id"
            onChange={(event) => setSearchOption(event.target.value)}
            name="search_option"
            className="App__search-option-input"
            type="radio"
            id="name_or_id"
          />
          Name or Id
        </label>
        <label className="App__search-option" htmlFor="ability">
          <input
            checked={searchOption === "ability"}
            value="ability"
            onChange={(event) => setSearchOption(event.target.value)}
            name="search_option"
            className="App__search-option-input"
            type="radio"
            id="ability"
          />
          Ability
        </label>
      </div>
      <Search
        onChange={(value) => handleSearch(value)}
        placeholder={formatSearchPlaceholder()}
      />
      {error && <p className="App__message">Error searching. Try again.</p>}
      {pokemons && <Cards data={pokemons} />}
      <img
        src={pokeball}
        alt="Pokeball"
        className={`App__background ${
          loading ? "App__background--animated " : ""
        }`}
      />
    </div>
  );
}
