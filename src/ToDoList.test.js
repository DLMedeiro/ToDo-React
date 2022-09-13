import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoList from "./TodoList";

// toDoList - variable?
function addToDo(toDoList, toDo = "Test") {
  const toDoInput = toDoList.getByLabelText("New Activity");
  fireEvent.change(toDoInput, { target: { value: toDo } });
  const button = toDoList.getByText("Add New Item");
  fireEvent.click(button);
}

test("it renders without crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// Expect the form to add inputs to the DOM
it("can add a new toDo item", function () {
  const toDoList = render(<TodoList />);

  // no activities yet
  expect(toDoList.queryByText("Test")).not.toBeInTheDocument();

  addToDo(toDoList);

  // expect to see activity input
  const removeButton = toDoList.getByText("Remove Activity");
  expect(removeButton).toBeInTheDocument();
  const activity = toDoList.getByText("Test");

  expect(activity).toBeInTheDocument();
  // expect form to be empty
  expect(toDoList.getAllByDisplayValue("")).toHaveLength(1);
});

// Expect selected item to be removed from the DOM
it("works when a toDo is deleted", function () {
  const toDoList = render(<TodoList />);
  addToDo(toDoList);
  const activity = toDoList.getByText("Test");
  expect(activity).toBeInTheDocument();
  const removeButton = toDoList.getByText("Remove Activity");

  fireEvent.click(removeButton);

  expect(toDoList.queryByText("Test")).not.toBeInTheDocument();
});

// Expect alert to show when the form is submitted without a task entered
it("works when an incorrect input is provided", function () {
  const { queryByText, getByLabelText } = render(<TodoList />);
  const input = getByLabelText("New Activity");
  const btn = queryByText("Add New Item");
  expect(queryByText("todo: ")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "" } });
  fireEvent.click(btn);
  expect(queryByText("todo: ")).not.toBeInTheDocument();
});
