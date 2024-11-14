import React from 'react';
import Work from './work'; // Import the Work component

function TodoComponent({ todo }) {
  return (
    <div className="todo">
      {todo.map((item, index) => (
        <Work key={index} todo={item} /> // Render each item using the Work component
      ))}
    </div>
  );
}

export default TodoComponent;

