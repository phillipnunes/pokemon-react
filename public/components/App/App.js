import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Pokemon from "../Pokemon/Pokemon";
import "../../shared/global.scss";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokemon" component={Pokemon} />
      </Switch>
    </div>
  );
}
