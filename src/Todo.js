import React from "react";

const Todo = ({ id, todo, remove }) => {
  const handleRemove = () => {
    remove(id);
  };

  return (
    <div>
      <li id={id}>
        {todo}
        <button onClick={handleRemove}>Remove Activity</button>
      </li>
    </div>
  );
};

export default Todo;
