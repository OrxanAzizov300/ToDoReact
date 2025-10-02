import React, { useState } from 'react'
import styles from "./form.module.css"
const Form = ({todos, setTodos}) => {
    const [todo,setTodo]=useState("")
    

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo("")

    }
  return (
      <form className={styles.todoform} onSubmit={handleSubmit} >
        <div className='flex'>
              <input placeholder='Enter todo item' onChange={(e) => setTodo(e.target.value)} value={todo} type="text" className={styles.modernInput} />
              <button type='submit' className={styles.modernButton}>Add</button>
        </div>
          
      </form>
  )
}

export default Form