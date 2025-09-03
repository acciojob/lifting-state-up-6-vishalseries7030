import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {todo.task}{" "}
            {!todo.completed ? (
              <button
                data-testid={`complete-button-${index}`}
                onClick={() => handleComplete(index)}
              >
                Complete
              </button>
            ) : (
              <span data-testid={`completed-${index}`} style={{ color: "green", fontWeight: "bold" }}>
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
