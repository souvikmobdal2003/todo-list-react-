import React from 'react';

function Work({ todo, index, deltodo }) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>{todo}</p>
      <button onClick={() => deltodo(index)}>X</button>

    </div>
  );
}

export default Work;
