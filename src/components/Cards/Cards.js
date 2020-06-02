import React from "react";
import CardItem from "./CardItem";
import "./Cards.scss";

export default function Cards({ data }) {
  return (
    <div className="Cards">
      {data.map((pokemon) => {
        return <CardItem key={pokemon.id} dataItem={pokemon} />;
      })}
    </div>
  );
}
