import React from 'react';
import Work from './work';

export default function Todocompnt({ todo, deltodo}) {
  return (
    <div className="todo">
      {todo.map((item, index) => (
        <Work key={index} todo={item} index={index} deltodo={deltodo} />
      ))}
    </div>
  );
}



