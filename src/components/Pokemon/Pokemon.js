import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Pokemon.scss";
import { usePokemonContext } from "../../context/PokemonContext";

export default function Pokemon() {
  const location = useLocation();
  const pokemonName = location.state.name;
  const { pokemon, setPokemons, loading, error } = usePokemonContext();
  console.log(pokemon);

  useEffect(() => {
    setPokemons(pokemonName, "name_or_id");
  }, []);

  return (
    <div className="Pokemon">
      <div className="Pokemon__container">
        <div className="Pokemon__header">
          <h1 className="Pokemon__name">{"sdfgsdfg"}</h1>
          <div className="Pokemon__abilities">
            <div className="Pokemon__ability">Fire</div>
            <div className="Pokemon__ability">Fir fdgs dfe</div>
          </div>
        </div>
        <img
          className="Pokemon__image"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          alt=""
        />
        <div className="Pokemon__details">
          <h2 className="Pokemon__details-title">Base Stats</h2>
          <div className="Pokemon__details-content">
            <div className="Pokemon__details-content-name">Species</div>
            <div className="Pokemon__details-content-value">60</div>
            <div className="Pokemon__details-content-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
