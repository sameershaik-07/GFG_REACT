// import { useState } from 'react'
// import { v4 as uuid } from "uuid"
// import './App.css'

// function App() {
//   const [todo ,setTodo] = useState();
//   const [todoList , setTodoList] = useState([]);
//   const onTodoInputChange = (e)=>{
//     setTodo(e.target.value);
//   }

//   const onTodoClick = ()=>{
//     setTodoList([...todoList, {id : uuid() , todo : todo , isCompleted : false}])
//     setTodo('');
//   }
//   // console.log(todoList);

//   const onDeleteClick = (id)=>{
//     const updatedTodoList  = todoList.filter(todo => todo.id !== id );
//     // console.log(updatedTodoList);
//     setTodoList(updatedTodoList);
//   }

//   const onTodoCheckChange = (id)=>{
//     const updatedTodoList = todoList.map(todo => todo.id === id ? {...todo, isCompleted : !todo.isCompleted} : todo);
//     setTodoList(updatedTodoList);
//     console.log(todoList);
//   }
//   return (
//     <>
//       <div className='App'>
//         <h1>wish list </h1>
//         <div>
//           <input value={todo} onChange={onTodoInputChange} placeholder='Add your wishlist here' />
//           <button onClick={onTodoClick}>Add</button>
//         </div>
//         <div>
//           {
//              // todoList && todoList.length > 0 && todoList.map(todo => ( similar to below
//             todoList?.length > 0 && todoList.map(todo => (
//               <div key={todo.id}>
//                 <label htmlFor="">
//                   <input onChange={() => onTodoCheckChange(todo.id)} type="checkbox" />
//                   <span className={todo.isCompleted ? 'strike-through' : ''}>{todo.todo}</span>
//                 </label>
//                 <button onClick={()=> onDeleteClick(todo.id)}>Delete</button>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

// ------------------------------------------------------------------------------------------------

// Import React's useState hook and the UUID generator
// import { useState } from "react";
// import { v4 as uuid } from "uuid";
// import "./App.css"; // Import your CSS styles

// function App() {
//   // State to hold the current input from the user
//   const [todo, setTodo] = useState("");

//   // State to hold the list of all todos
//   const [todoList, setTodoList] = useState([]);

//   // Function to update `todo` state when user types in input
//   const onTodoInputChange = (e) => {
//     setTodo(e.target.value);
//   };

//   // Function to add a new todo item to the list
//   const onTodoClick = () => {
//     // Prevent adding empty todo
//     if (todo.trim() === "") return;

//     // Add a new item to the todoList with a unique ID and default `isCompleted` as false
//     setTodoList([
//       ...todoList,
//       { id: uuid(), todo: todo.trim(), isCompleted: false },
//     ]);

//     // Clear the input box
//     setTodo("");
//   };

//   // Function to delete a todo item by its id
//   const onDeleteClick = (id) => {
//     const updatedTodoList = todoList.filter((todo) => todo.id !== id);
//     setTodoList(updatedTodoList); // Update the state
//   };

//   // Function to toggle the checkbox (mark complete/incomplete)
//   const onTodoCheckChange = (id) => {
//     const updatedTodoList = todoList.map((todo) =>
//       todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
//     );
//     setTodoList(updatedTodoList); // Update the state
//   };

//   return (
//     <>
//       <div className="App">
//         <h1>Wish List</h1>

//         {/* Input field and Add button */}
//         <div>
//           <input
//             value={todo} // controlled input
//             onChange={onTodoInputChange}
//             placeholder="Add your wishlist here"
//           />
//           <button onClick={onTodoClick}>Add</button>
//         </div>

//         {/* List of todo items */}
//         <div>
//           {todoList.length > 0 &&
//             todoList.map((todo) => (
//               <div key={todo.id}>
//                 <label>
//                   {/* Checkbox for marking complete/incomplete */}
//                   <input
//                     type="checkbox"
//                     checked={todo.isCompleted} // controlled checkbox
//                     onChange={() => onTodoCheckChange(todo.id)}
//                   />

//                   {/* Show todo text with strike-through if completed */}
//                   <span className={todo.isCompleted ? "strike-through" : ""}>
//                     {todo.todo}
//                   </span>
//                 </label>

//                 {/* Button to delete a todo */}
//                 <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


import { Wishlist } from "./Wishlist";

import React from 'react'

function App(){
  return (
    <>
      <Wishlist />
    </>
  )
}

export default App
