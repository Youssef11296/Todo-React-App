import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
