import { useState } from 'react'
import './App.css'
import Input_compont from './component/input_compont'
import Todocompnt from './component/todocompnt'


function App() {
  const[todo,addtodo]=useState([ ])
  const[input,inputval]=useState(" ")
  function writetodo(e){
    inputval(e.target.value)
  }

  function todolist(){
    if(inputval!=""){
      addtodo((prevetodo)=>[...prevetodo ,input])//(prevetodo)=>[...prevetodo it is a put array element one by one
      inputval(" ")
    }
  }
  console.log(todo)
  return (
   <main>
    <h1  className='head'>Todo List</h1>
    <Input_compont  input={input} writetodo={writetodo}  todolist={todolist}/>
    <Todocompnt todo={todo}/>
   </main>
  )
}

export default App
