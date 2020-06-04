import React from "react";
import { mount } from "enzyme";
import { describe, expect, test } from "@jest/globals";
import FilterOptions from "./FilterOptions";
import { filter } from "../../shared/constants";

const mockFnc = jest.fn((value) => value);

describe("FilterOptions Component", () => {
  test("should pass value of option selected", () => {
    const wrapper = mount(
      <FilterOptions
        onChange={(value) => mockFnc(value)}
        selectedOption="other_option"
      />
    );

    expect(
      wrapper
        .find(`#${filter.byNameOrId}`)
        .simulate("change", filter.byNameOrId)
    );
    expect(mockFnc).toBeCalledWith(filter.byNameOrId);
  });

  test("input should be checked", () => {
    const wrapper = mount(
      <FilterOptions
        onChange={(value) => mockFnc(value)}
        selectedOption={filter.byAbility}
      />
    );

    expect(
      wrapper.find(`#${filter.byAbility}`).forEach((node) => {
        expect(node.props().checked).toEqual(true);
      })
    );
  });

  test("input should not be checked", () => {
    const wrapper = mount(
      <FilterOptions
        onChange={(value) => mockFnc(value)}
        selectedOption={filter.byNameOrId}
      />
    );

    expect(
      wrapper.find(`#${filter.byAbility}`).forEach((node) => {
        expect(node.props().checked).toEqual(false);
      })
    );
  });
});
