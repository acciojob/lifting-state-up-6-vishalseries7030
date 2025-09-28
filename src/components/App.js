import React, { useState } from "react";
import TodoList from "./TodoList";
import "./../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build a React app", completed: false },
    { id: 3, task: "Deploy the React app", completed: false },
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
