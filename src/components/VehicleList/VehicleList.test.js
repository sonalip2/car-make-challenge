import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import VehicleList from "./index";

jest.mock("../../utils/apiCalls", () => ({
  getVehicles: () =>
    Promise.resolve([
      {
        make: "FORD",
        model: "Fiesta",
        enginePowerPS: 60,
        enginePowerKW: 44,
        fuelType: "Benzin",
        bodyType: "Limousine",
        engineCapacity: 1299,
      },
      {
        make: "FORD",
        model: "Fiesta",
        enginePowerPS: 68,
        enginePowerKW: 50,
        fuelType: "Diesel",
        bodyType: "Limousine",
        engineCapacity: 1399,
      },
    ]),
}));

describe("<VehicleList/>", () => {
  it("render VehicleList component without crash", () => {
    act(() => {
      mount(<VehicleList make="make" model="model" />);
    });
  });
});
