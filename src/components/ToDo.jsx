import React, { useState } from 'react'

import Form from './Form'
import TodoList from './TodoList'
import Footer from './Footer'

const ToDo = () => {
    const [todos, setTodos] = useState([])
    const completedTodos = todos.filter((todo)=>todo.done).length
    const totalTodos=todos.length
    



  return (
    <div style={{marginTop:"50px"}}>
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
    </div>
  )
}

export default ToDo