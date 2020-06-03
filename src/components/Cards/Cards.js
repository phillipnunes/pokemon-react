import React from "react";
import CardItem from "./CardItem";
import { useHistory } from "react-router-dom";
import "./Cards.scss";

export default function Cards({ data }) {
  const history = useHistory();

  function handleClickNavigation(pokemon, requestMissingData) {
    history.push("/pokemon", {
      data: { cachedPokemon: pokemon, requestMissingData },
    });
  }
  return (
    <div className="Cards">
      {Array.isArray(data) ? (
        data.map((pokemon) => (
          <CardItem
            onClick={(pokemon) => handleClickNavigation(pokemon, true)}
            key={pokemon.id}
            dataItem={pokemon}
          />
        ))
      ) : (
        <CardItem
          onClick={(pokemon) => handleClickNavigation(pokemon, false)}
          key={data.id}
          dataItem={data}
        />
      )}
    </div>
  );
}
