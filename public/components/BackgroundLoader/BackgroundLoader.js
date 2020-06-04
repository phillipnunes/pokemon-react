import React from "react";
import { PropTypes } from "prop-types";
import pokeball from "../../assets/pokeball.png";
import "./BackgroundLoader.scss";

export default function BackgroundLoader({ loading, styles }) {
  return (
    <img
      style={styles}
      src={pokeball}
      alt="Pokeball"
      className={`BackgroundLoader ${
        loading ? "BackgroundLoader--animated " : ""
      }`}
    />
  );
}

BackgroundLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
  styles: PropTypes.object,
};
