import React from 'react';

function Work({ todo }) {
  return (
    <div className="todo-item">
      <p>{todo}</p>
      <input type="checkbox" />
      <button>X</button>
    </div>
  );
}

export default Work;
