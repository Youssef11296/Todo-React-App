import React, { useState } from "react";
import Todos from "./comps/Todos";
import Form from "./comps/Form";
import Header from "./comps/Header";
import "./App.css";

const App = () => {
  // Initial State
  const [todos, setTodos] = useState(SAMPLE_MODAL);

  // Handle Complete
  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Handle Delete
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Add Todo
  const addTodo = (title) => {
    const newTodos = [...todos, { title }];
    setTodos(newTodos);
  };

  // Handle Hover
  const handleHover = (index) => {
    const newTodos = [...todos];
    newTodos[index].hovered = !newTodos[index].hovered;
    setTodos(newTodos);
  };

  // Main Render
  return (
    <div className="container">
      <Header />
      <Todos
        todos={todos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        handleHover={handleHover}
      />
      <Form addTodo={addTodo} />
    </div>
  );
};

const SAMPLE_MODAL = [
  { title: "Tide The Bed", completed: false, hovered: false },
  { title: "Take The Breakfast", completed: false, hovered: false },
  { title: "Meet Your Friends", completed: false, hovered: false },
];

export default App;
