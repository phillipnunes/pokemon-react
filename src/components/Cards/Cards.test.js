import React from "react";
import { mount } from "enzyme";
import { describe, expect, test } from "@jest/globals";
import Cards from "./Cards";

describe("Cards Component", () => {
  test("number of cards should be the same as the size of the data array", () => {
    const dummyData = [
      {
        id: 1,
        first: "first",
      },
      {
        id: 2,
        second: "second",
      },
      {
        id: 3,
        third: "third",
      },
    ];
    const wrapper = mount(<Cards data={dummyData} />);

    const cardsComponent = wrapper.find(".CardItem");
    expect(cardsComponent.length).toEqual(dummyData.length);
  });
});
