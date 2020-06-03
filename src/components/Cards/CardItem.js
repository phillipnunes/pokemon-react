import React from "react";
import "./CardItem.scss";

export default function CardItem({ dataItem, onClick }) {
  const { name, sprites, abilities } = dataItem;

  function getTwoFirstItems(array) {
    return array.slice(0, 2).map((abilityItem) => {
      const { ability } = abilityItem;
      return (
        <div key={ability.name} className="CardItem__abilities-item">
          {formatAbility(ability.name)}
        </div>
      );
    });
  }

  function formatAbility(string) {
    return string.replace(/-/g, " ");
  }

  return (
    <div className="CardItem">
      <h1 onClick={() => onClick(dataItem)} className="CardItem__name">
        {name}
      </h1>
      <div className="CardItem__abilities">
        {abilities && getTwoFirstItems(abilities)}
      </div>
      <img
        onClick={() => onClick(dataItem)}
        className="CardItem__image"
        src={sprites && sprites.front_default}
        alt={name}
      />
    </div>
  );
}
