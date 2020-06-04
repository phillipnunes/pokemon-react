import React from "react";
import { shallow, mount } from "enzyme";
import { describe, expect, test } from "@jest/globals";
import Search from "./Search";

const mockFnc = jest.fn((value) => value);

describe("App Component", () => {
  test("renders placeholder text", () => {
    const wrapper = shallow(
      <Search onChange={() => null} placeholder="Placeholder text" />
    );
    expect(wrapper.find("#search").at(0).props().placeholder).toEqual(
      "Placeholder text"
    );
  });

  test("return value on input change", () => {
    const event = {
      target: { value: "pikachu" },
    };
    const wrapper = shallow(
      <Search
        onChange={(value) => mockFnc(value)}
        placeholder="Placeholder text"
      />
    );

    expect(wrapper.find("#search").simulate("change", event));
    expect(mockFnc).toBeCalledWith("pikachu");
  });
});
