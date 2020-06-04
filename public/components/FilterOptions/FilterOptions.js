import React from "react";
import { filter } from "../../shared/constants";
import { PropTypes } from "prop-types";
import "./FilterOptions.scss";

export default function FilterOptions({ onChange, selectedOption }) {
  return (
    <>
      <label className="Search-option" htmlFor={filter.byNameOrId}>
        <input
          checked={selectedOption === filter.byNameOrId}
          value={filter.byNameOrId}
          onChange={(event) => onChange(event.target.value)}
          name="search_option"
          className="Search-option__input"
          type="radio"
          id={filter.byNameOrId}
        />
        Name or Id
      </label>
      <label className="Search-option" htmlFor={filter.byAbility}>
        <input
          checked={selectedOption === filter.byAbility}
          value={filter.byAbility}
          onChange={(event) => onChange(event.target.value)}
          name="search_option"
          className="Search-option__input"
          type="radio"
          id={filter.byAbility}
        />
        Ability
      </label>
    </>
  );
}

FilterOptions.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};
