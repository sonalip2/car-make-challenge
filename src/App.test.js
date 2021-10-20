import React from "react";
import { mount } from "enzyme";
import App from "./App";

test("render App component without crash", () => {
  mount(<App />);
});
