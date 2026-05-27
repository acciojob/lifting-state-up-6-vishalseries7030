import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.task}</p>

          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleComplete: PropTypes.func.isRequired
};

export default TodoList;