import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'
import './App.css' // Import your CSS styles

export const Wishlist = () => {
  const [todo , setTodo]  = useState('');
  const [todoList , setTodoList] = useState([]);
  const onChangeTodo = (e)=>{
    setTodo(e.target.value);
    
  }
  const onAddClick = ()=>{
    if(todo.trim() == '') return;
    setTodoList([...todoList , {id: uuid() , todo:todo.trim() ,isCompleted :false}])
    setTodo('');
  }
  const onDeleteClick = (id)=>{
    const updatedTodoList = todoList.filter(todo => todo.id !==id);
    setTodoList(updatedTodoList);
  }
  const onCheckClick = (id)=>{
    const updatedTodoList = todoList.map(todo => todo.id ===id ? {...todo , isCompleted : !todo.isCompleted} : todo)
    setTodoList(updatedTodoList);
  }
  return (
    <div>
      <h2>wishlist</h2>
      <input type='text' autoFocus value={todo} onChange={onChangeTodo} placeholder='add the wishlist'/>
      <button onClick={onAddClick}>Add</button>
      <div>
        {
          todoList.length> 0 && todoList.map(todo =>(
            <div key = {uuid()}>
              <label>
                <input onChange ={() => onCheckClick(todo.id)} checked={todo.isCompleted} type='checkbox'/>
              </label>
                <span className={todo.isCompleted ? 'strike-through' : ''}>
                {todo.todo}</span>
              <button  onClick={()=>onDeleteClick(todo.id)}>delete</button>
            </div>           
          ))
        }
      </div>
    </div>
  )
}
