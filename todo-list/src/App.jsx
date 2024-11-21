import { useState } from 'react'
import './App.css'
import Input_compont from './component/input_compont'
import Todocompnt from './component/todocompnt'


function App() {
  const[todo,addtodo]=useState([ ])
  const[input,inputval]=useState(" Enter Your task ")
  function writetodo(e){
    inputval(e.target.value)
  }

  function todolist(){
    if(inputval!=""){
      addtodo((prevetodo)=>[...prevetodo ,input])
    }
  }
  console.log(todo)
  function deltodo(indexToDelete) {
    addtodo((prevetodo) =>
      prevetodo.filter((_, index) => index !== indexToDelete)
    );
  }
  return (
   <main>
    <h1  className='head'>Todo List</h1>
    <Input_compont  input={input} writetodo={writetodo}  todolist={todolist}/>
    <Todocompnt todo={todo} deltodo={deltodo}/>
   </main>
  )
}

export default App
