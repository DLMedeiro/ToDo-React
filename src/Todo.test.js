import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

test("it renders without crashing", () => {
  render(<Todo />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
