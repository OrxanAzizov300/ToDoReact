import React, { useState } from 'react'
import styles from "./form.module.css"
const Form = ({todos, setTodos}) => {
    //const [todo,setTodo]=useState("")
    const [todo,setTodo]=useState({name:"",done:false})
    

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo({name:"",done:false})

    }
  return (
      <form className={styles.todoform} onSubmit={handleSubmit} >
        <div className='flex'>
              <input placeholder='Enter todo item' onChange={(e) => setTodo({name:e.target.value,done:false})} value={todo.name} type="text" className={styles.modernInput} />
              <button type='submit' className={styles.modernButton}>Add</button>
        </div>
          
      </form>
  )
}

export default Form