import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, handleComplete, handleDelete, handleHover }) => {
  return (
    <div className="todos-container">
      {todos.map((todo, index) => (
        <TodoItem
          index={index}
          key={index}
          todo={todo}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          handleHover={handleHover}
        />
      ))}
    </div>
  );
};

export default Todos;
