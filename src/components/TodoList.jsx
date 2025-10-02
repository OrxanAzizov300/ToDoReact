
import ToDoItem from './ToDoItem'
import styles from './todolist.module.css'
import React from 'react'



const TodoList = ({todos,setTodos}) => {
  return (
    <div className={styles.list}>
          {todos.map((item) => (
              <ToDoItem key={item} item={item} todos={todos} setTodos={setTodos} />
          ))}
          
    </div>
  )
}

export default TodoList