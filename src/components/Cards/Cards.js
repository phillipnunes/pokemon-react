import React from "react";
import CardItem from "./CardItem";
import { useHistory } from "react-router-dom";
import "./Cards.scss";

export default function Cards({ data }) {
  const history = useHistory();

  console.log("data", data);

  function handleClickNavigation(name) {
    history.push("/pokemon", { name });
  }
  return (
    <div className="Cards">
      {Array.isArray(data) ? (
        data.map((pokemon) => (
          <CardItem
            onClick={(name) => handleClickNavigation(name)}
            key={pokemon.id}
            dataItem={pokemon}
          />
        ))
      ) : (
        <CardItem
          onClick={(name) => handleClickNavigation(name)}
          key={data.id}
          dataItem={data}
        />
      )}
    </div>
  );
}
