import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "./../../../test/testUtils";
import Info from "./info.js";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without an error", () => {
  const wrapper = shallow(<Info />);
  const component = findByTestAttr(wrapper, "component-info");
  expect(component.length).toBe(1);
});
