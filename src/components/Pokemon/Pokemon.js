import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePokemonContext } from "../../context/PokemonContext";
import { filter } from "../../shared/constants";
import pokeball from "../../assets/pokeball.png";
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

  function replaceHyphenWithSpace(string) {
    return string.replace(/-/g, " ");
  }

  return (
    <div className="Pokemon">
      {!loading && content && (
        <div className="Pokemon__container">
          <div className="Pokemon__header">
            <h1 className="Pokemon__name">{content.name}</h1>
            <div className="Pokemon__abilities">
              {content.abilities &&
                content.abilities.map((item) => {
                  const { name } = item.ability;
                  return (
                    <div key={name} className="Pokemon__ability">
                      {replaceHyphenWithSpace(name)}
                    </div>
                  );
                })}
            </div>
          </div>
          <img
            className="Pokemon__image"
            src={content.sprites && content.sprites.front_default}
            alt={content.name}
          />
          <div className="Pokemon__details">
            <h2 className="Pokemon__details-title">Base Stats</h2>
            {content.stats &&
              content.stats.map((item) => {
                const { stat, base_stat } = item;
                const { name } = stat;
                return (
                  <div key={name} className="Pokemon__details-content">
                    <div className="Pokemon__details-content-name">
                      {replaceHyphenWithSpace(name)}
                    </div>
                    <div className="Pokemon__details-content-value">
                      {base_stat}
                    </div>
                    <div className="Pokemon__details-content-progress">
                      <div
                        style={{
                          backgroundColor:
                            base_stat >= 50 ? "var(--green)" : "var(--red)",
                          width: `${base_stat}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
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
