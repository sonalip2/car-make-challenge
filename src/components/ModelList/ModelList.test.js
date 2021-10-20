import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import ModelList from "./index";

jest.mock("../../utils/apiCalls", () => ({
  getModels: () => Promise.resolve(["1er", "2er", "3er", "4er"]),
}));

describe("<ModelList/>", () => {
  test("render ModelList component without crash", () => {
    act(() => {
      mount(<ModelList make="make" onModelItemClick={jest.fn()} />);
    });
  });
});
