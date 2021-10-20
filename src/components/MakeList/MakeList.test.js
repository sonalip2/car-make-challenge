import React from "react";
import { mount } from "enzyme";
import MakeList from "./index";

jest.mock("../../utils/apiCalls", () => ({
  getMakes: () =>
    Promise.resolve([
      "ALFA ROMEO",
      "AUDI",
      "AUSTIN",
      "BARKAS",
      "BMW",
      "CADILLAC",
      "CHEVROLET",
      "CHRYSLER",
      "CITROEN",
    ]),
}));

describe("<MakeList/>", () => {
  test("render MakeList component without crash", () => {
    mount(<MakeList onMakeItemClick={() => {}} />);
  });
});
