import React from "react";
import { shallow } from "enzyme";
import { describe, expect, test } from "@jest/globals";
import PokemonAbilities from "./PokemonAbilities";

describe("PokemonAbilities Component", () => {
  test("number of items should be the same as the size of the data array", () => {
    const dummyData = [
      {
        ability: {
          name: "first",
        },
      },
      {
        ability: {
          name: "second",
        },
      },
      {
        ability: {
          name: "third",
        },
      },
    ];
    const wrapper = shallow(<PokemonAbilities data={dummyData} />);

    const pokemonAbilitiesComponent = wrapper.find(".Pokemon__ability");
    expect(pokemonAbilitiesComponent.length).toEqual(dummyData.length);
  });
});
