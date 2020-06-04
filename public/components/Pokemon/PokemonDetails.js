import React from "react";
import { PropTypes } from "prop-types";
import { findAndReplace } from "../../shared/utils";

export default function PokemonDetails({ data }) {
  return data.map((item) => {
    const { stat, base_stat } = item;
    const { name } = stat;
    return (
      <div key={name} className="Pokemon__details-content">
        <div className="Pokemon__details-content-name">
          {findAndReplace(name, "-", " ")}
        </div>
        <div className="Pokemon__details-content-value">{base_stat}</div>
        <div className="Pokemon__details-content-progress">
          <div
            style={{
              backgroundColor: base_stat >= 50 ? "var(--green)" : "var(--red)",
              width: `${base_stat}%`,
            }}
          />
        </div>
      </div>
    );
  });
}

PokemonDetails.propTypes = {
  data: PropTypes.array.isRequired,
};
