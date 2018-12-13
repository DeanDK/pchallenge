import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "./../../../test/testUtils";
import Header from "./header.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without an error", () => {
  const wrapper = shallow(<Header />);
  const component = findByTestAttr(wrapper, "component-header");
  expect(component.length).toBe(1);
});
