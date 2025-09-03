import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {todo.task}{" "}
            {!todo.completed ? (
              <button
                onClick={() => handleComplete(index)}
                data-testid={`complete-btn-${index}`} // Cypress ke liye
              >
                Complete
              </button>
            ) : (
              <span style={{ color: "green", fontWeight: "bold" }}>
                Completed
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
