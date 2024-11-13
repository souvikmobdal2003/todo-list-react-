import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <h1  className='head'>Todo List</h1>
    <div className='elements'>
      <input type="text" />
      <button>ADD</button>
    </div>
    <div className='todo'>
      <p>Go to gym</p>
      <input type="checkbox" name="" id="" />
      <button>X</button>
    </div>
   </main>
  )
}

export default App
