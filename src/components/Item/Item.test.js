import React from "react";
import { mount } from "enzyme";
import Item from "./index";

describe("<Item />", () => {
  it("should render <Item /> component", () => {
    mount(<Item item="test" />);
  });

  it("should call handleSubmitUserData function", () => {
    const onClickFn = jest.fn();
    const component = mount(<Item item="test" onClick={onClickFn} />);
    component.find("div").first().props().onClick();

    expect(onClickFn).toBeCalled();
  });
});
