import React from "react";
import { shallow } from "enzyme";
import { describe, expect, test } from "@jest/globals";
import PokemonDetails from "./PokemonDetails";

describe("PokemonDetails Component", () => {
  test("number of items should be the same as the size of the data array", () => {
    const dummyData = [
      {
        stat: {
          name: "A",
        },
        base_stat: "B",
      },
      {
        stat: {
          name: "C",
        },
        base_stat: "D",
      },
    ];
    const wrapper = shallow(<PokemonDetails data={dummyData} />);

    const pokemonAbilitiesComponent = wrapper.find(".Pokemon__details-content");
    expect(pokemonAbilitiesComponent.length).toEqual(dummyData.length);
  });
});
