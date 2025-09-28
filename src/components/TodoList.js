import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            {todo.task}{" "}
            <button
              onClick={() => handleComplete(todo.id)}
              disabled={todo.completed}
              style={{
                padding: "5px 10px",
                cursor: todo.completed ? "not-allowed" : "pointer",
                backgroundColor: todo.completed ? "green" : "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {todo.completed ? "Completed" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleComplete: PropTypes.func.isRequired,
};

export default TodoList;
