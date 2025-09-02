import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul style={{ listStyleType: "disc", textAlign: "left", display: "inline-block" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            {todo.text}{" "}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
            {todo.completed && <span style={{ marginLeft: "10px", color: "green" }}>✔ Done</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
