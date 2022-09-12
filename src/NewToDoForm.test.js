import React from "react";
import { render } from "@testing-library/react";
import NewToDoForm from "./NewToDoForm";

test("it renders without crashing", () => {
  render(<NewToDoForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewToDoForm />);
  expect(asFragment()).toMatchSnapshot();
});
