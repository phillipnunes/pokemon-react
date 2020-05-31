import React from "react";
import Search from "../Search/Search";
import Cards from "../Cards/Cards";
import "../../shared/global.scss";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <h1 className="App__title">What Pokemon are you looking for?</h1>
      <Search placeholder="Search Pokemon, Ability, etc.." />
      <Cards />
    </div>
  );
}
