import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 } from "uuid";

const TodoList = () => {
  const INITIAL_STATE = [
    { id: v4(), todo: "Learn React" },
    { id: v4(), todo: "Clean Kitchen" },
  ];

  const [todos, setTodos] = useState(INITIAL_STATE);
  const addItem = (id, todo) => {
    setTodos((todos) => [...todos, { id, todo }]);
  };
  const remove = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <NewTodoForm addItem={addItem} />
      <div>
        {todos.map(({ id, todo }) => (
          <Todo id={id} todo={todo} remove={remove} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
