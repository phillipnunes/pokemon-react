import React from "react";
import ReactDOM from "react-dom";
import { PokemonProvider } from "./context/PokemonContext";
import App from "./components/App/App";

ReactDOM.render(
  <PokemonProvider>
    <App />
  </PokemonProvider>,
  document.getElementById("root")
);
