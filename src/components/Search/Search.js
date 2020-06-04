import React from "react";
import { PropTypes } from "prop-types";
import { FaSearch } from "react-icons/fa";
import "./Search.scss";

export default function Search({ onChange, placeholder }) {
  return (
    <div className="Search">
      <FaSearch className="Search__icon" />
      <input
        id="search"
        placeholder={placeholder}
        className="Search__input"
        onChange={(event) => onChange && onChange(event.target.value)}
        type="text"
        name="search"
      />
    </div>
  );
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
