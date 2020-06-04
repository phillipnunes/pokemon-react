import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";
import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
