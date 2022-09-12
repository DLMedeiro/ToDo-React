import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

test("it renders without crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// Expect the form to add inputs to the DOM
it("works when a new toDo is added", function () {});
// Expect selected item to be removed from the DOM
it("works when a toDo is deleted", function () {});
// Expect an error to show when the form is submitted without a task entered
it("works when an incorrect input is provided", function () {});
