import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}

            {!todo.completed && (
              <button
                onClick={() => handleComplete(todo.id)}
              >
                Complete
              </button>
            )}

            {todo.completed && <span> Completed</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleComplete: PropTypes.func.isRequired,
};

export default TodoList;