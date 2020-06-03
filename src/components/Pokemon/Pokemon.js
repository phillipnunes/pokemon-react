import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePokemonContext } from "../../context/PokemonContext";
import pokeball from "../../assets/pokeball.png";
import PokemonAbilities from "./PokemonAbilities";
import PokemonDetails from "./PokemonDetails";
import { filter } from "../../shared/constants";
import "./Pokemon.scss";

export default function Pokemon() {
  const location = useLocation();
  const data = location.state.data;
  const { cachedPokemon, requestMissingData } = data;
  const [content, setContent] = useState(null);
  const { pokemon, setPokemons, loading } = usePokemonContext();

  useEffect(() => {
    setDataFromCacheOrApi();
  }, []);

  useEffect(() => {
    setContent(pokemon);
  }, [pokemon]);

  function setDataFromCacheOrApi() {
    if (requestMissingData) {
      setPokemons(cachedPokemon.name, filter.byNameOrId);
    }
    if (!requestMissingData) {
      setContent(cachedPokemon);
    }
  }

  return (
    <div className="Pokemon">
      {!loading && content && (
        <div className="Pokemon__container">
          <div className="Pokemon__header">
            <h1 className="Pokemon__name">{content.name}</h1>
            {content.abilities && <PokemonAbilities data={content.abilities} />}
          </div>
          <div className="Pokemon__details">
            <img
              className="Pokemon__details-image"
              src={content.sprites && content.sprites.front_default}
              alt={content.name}
            />
            <h2 className="Pokemon__details-title">Base Stats</h2>
            {content.stats && <PokemonDetails data={content.stats} />}
          </div>
        </div>
      )}
      <img
        className={`Pokemon__background ${
          loading ? "Pokemon__background--animated" : ""
        }`}
        src={pokeball}
        alt="Pokeball"
      />
    </div>
  );
}
