import React from "react";
import { PropTypes } from "prop-types";
import { findAndReplace } from "../../shared/utils";

export default function PokemonAbilities({ data }) {
  return (
    <div className="Pokemon__abilities">
      {data.map((item) => {
        const { name } = item.ability;
        return (
          <div key={name} className="Pokemon__ability">
            {findAndReplace(name, "-", " ")}
          </div>
        );
      })}
    </div>
  );
}

PokemonAbilities.propTypes = {
  data: PropTypes.array.isRequired,
};
