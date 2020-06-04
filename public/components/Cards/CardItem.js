import React from "react";
import { PropTypes } from "prop-types";
import "./CardItem.scss";
import { findAndReplace } from "../../shared/utils";

export default function CardItem({ dataItem, onClick }) {
  const { name, sprites, abilities } = dataItem;

  function getTwoFirstItems(array) {
    return array.slice(0, 2).map((abilityItem) => {
      const { ability } = abilityItem;
      return (
        <div key={ability.name} className="CardItem__abilities-item">
          {findAndReplace(ability.name, "-", " ")}
        </div>
      );
    });
  }

  return (
    <div onClick={() => onClick(dataItem)} className="CardItem">
      <h1 className="CardItem__name">{name}</h1>
      <div className="CardItem__abilities">
        {abilities && getTwoFirstItems(abilities)}
      </div>
      <img
        className="CardItem__image"
        src={sprites && sprites.front_default}
        alt={name}
      />
    </div>
  );
}

CardItem.propTypes = {
  dataItem: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
