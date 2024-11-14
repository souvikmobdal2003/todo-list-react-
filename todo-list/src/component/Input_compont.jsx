import React from 'react'

function input_compont({input , writetodo, todolist}) {
  return (
    <div className='elements' >
    <input type="text" value={input} onChange={writetodo}/>
    <button onClick={todolist}>ADD</button>
  </div>
  )
}

export default input_compont