import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import WineItems from "./wine_items.js";
import { findByTestAttr } from "./../../test/testUtils";
import { checkProps } from "./../../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const defaultProps = { wines: {} };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<WineItems {...setupProps} />);
};

test("render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-wine_items");
  expect(component.length).toBe(1);
});

test("renders no text when props is not object", () => {
  const wrapper = setup({ wines: [] });
  const component = findByTestAttr(wrapper, "component-wine_items");
  expect(component.text()).toBe("");
});

test("render text when prop is object", () => {
  const wrapper = setup({
    wines: { title: "something", country: "something" }
  });
  const message = findByTestAttr(wrapper, "component-wine_items");
  expect(message.text()).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { wines: {} };
  checkProps(WineItems, expectedProps);
});
