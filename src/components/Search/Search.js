import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.scss";

export default function Search({ onChange, placeholder }) {
  return (
    <div className="Search">
      <FaSearch className="Search__icon" />
      <input
        placeholder={placeholder}
        className="Search__input"
        onChange={(event) => onChange && onChange(event.target.value)}
        type="text"
        name="search"
      />
    </div>
  );
}
