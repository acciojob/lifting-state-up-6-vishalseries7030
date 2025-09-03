import React, { useState } from "react";
import TodoList from "./TodoList";
import "./../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { task: "Learn React", completed: false },
    { task: "Build a React app", completed: false },
    { task: "Deploy the React app", completed: false },
  ]);

  const handleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: true } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
