import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./slices/todoSlice";
import { v4 as uuid } from "uuid";

function App() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  console.log(todos);
  const onAddClick = () => {
    dispatch(
      addTodo({
        id: uuid(),
        todo: inputText,
      })
    );
    setInputText("");
  };

  const onDeleteClick = (id) => {
    // dispatch(deleteTodo(id)) it assigns the payload as the id ....
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  return (
    <>
      <h1 className="text-purple-950">To do app</h1>
      <div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Enter to do .."
        />
        <button onClick={onAddClick}>Add</button>
      </div>
      {todos?.length > 0 &&
        todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.todo}</span>
            <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
          </div>
        ))}
    </>
  );
}

export default App;
