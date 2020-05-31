import React from "react";
import "./CardItem.scss";

export default function CardItem() {
  return (
    <>
      <div className="CardItem">
        <h1 className="CardItem__name">Bulbassaur</h1>
        <div className="CardItem__abilities">
          <div className="CardItem__abilities-item">Fire</div>
          <div className="CardItem__abilities-item">Frozen</div>
        </div>
        <img
          className="CardItem__image"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Pokemon"
        />
      </div>
    </>
  );
}
