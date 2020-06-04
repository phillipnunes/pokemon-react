import React from "react";
import { shallow } from "enzyme";
import { describe, expect, test } from "@jest/globals";
import CardItem from "./CardItem";

const mockFnc = jest.fn((value) => value);

describe("CardItem Component", () => {
  test("return data on click card", () => {
    const dummyData = {
      what: "ever",
    };
    const wrapper = shallow(
      <CardItem dataItem={dummyData} onClick={(obj) => mockFnc(obj)} />
    );

    expect(wrapper.find(".CardItem").simulate("click", dummyData));
    expect(mockFnc).toBeCalledWith(dummyData);
  });
});
