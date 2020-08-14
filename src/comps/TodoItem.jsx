import React from "react";
import { FaTrash, FaCheckCircle as FaDone } from "react-icons/fa";

const TodoItem = ({
  todo,
  index,
  handleComplete,
  handleDelete,
  handleHover,
}) => {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.title}
      <div className="btns">
        <FaDone
          className="complete"
          onClick={() => handleComplete(index)}
          style={{ color: todo.completed ? "#080" : "", transition: ".4s" }}
        />
        <FaTrash
          className="delete"
          onClick={() => handleDelete(index)}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(index)}
          style={{ color: todo.hovered ? "red" : "", transition: ".4s" }}
        />
      </div>
    </div>
  );
};

export default TodoItem;
