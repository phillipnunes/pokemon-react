import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useHistory } from "react-router-dom";
import { usePokemonContext } from "../../context/PokemonContext";
import PokemonAbilities from "./PokemonAbilities";
import PokemonDetails from "./PokemonDetails";
import { filter } from "../../shared/constants";
import BackgroundLoader from "../BackgroundLoader/BackgroundLoader";
import "./Pokemon.scss";

export default function Pokemon() {
  const location = useLocation();
  const history = useHistory();
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
            <div className="Pokemon__header-container">
              <FaArrowLeft
                className="Pokemon__header-icon"
                onClick={() => history.goBack()}
              />
              <h1 className="Pokemon__name">{content.name}</h1>
            </div>
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
      <BackgroundLoader
        styles={{
          top: "16rem",
          height: "32rem",
          alignSelf: "center",
        }}
        loading={loading}
      />
    </div>
  );
}
