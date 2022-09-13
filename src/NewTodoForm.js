import React, { useState } from "react";
import { v4 } from "uuid";

const NewTodoForm = ({ addItem }) => {
  const INITIAL_STATE = {
    id: "",
    todo: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.todo === "") {
      alert("Please enter an activity");
    } else {
      addItem(v4(), formData.todo);
      setFormData(INITIAL_STATE);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="id">id</label>
      <input
        id="id"
        type="text"
        name="id"
        placeholder="id"
        value={formData.id}
        onChange={handleChange}
      /> */}
      <label htmlFor="todo">New Activity</label>
      <input
        id="todo"
        type="text"
        name="todo"
        placeholder="todo"
        value={formData.todo}
        onChange={handleChange}
      />
      {/* <p>{formData.id}</p> */}
      <p>{formData.todo}</p>
      <button>Add New Item</button>
    </form>
  );
};

export default NewTodoForm;
