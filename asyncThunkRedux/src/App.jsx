// import { useState } from 'react'
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadPost } from "./slices/postSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const { posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadPost());
    }
  }, []);
  console.log(posts);
  // const [count, setCount] = useState(0)

  return <></>;
}

export default App;
