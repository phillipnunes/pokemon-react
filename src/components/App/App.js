import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import Pokemon from "../Pokemon/Pokemon";
import "../../shared/global.scss";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pokemon">
        <Pokemon />
      </Route>
    </div>
  );
}
