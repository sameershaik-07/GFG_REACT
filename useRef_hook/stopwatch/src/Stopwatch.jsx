import React, { useRef, useState } from "react";

export const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(0);
// useRef values persist across re-renders, while normal variables are re-initialized.

  let timerId =  0;

  const onAdd = () => {
    timerRef.current = setInterval(()=>{
      setCount(count => count + 1);
    },100)
        // console.log(timerRef.current);
    console.log(timerId)
  };

  const onSub = () => {
    clearInterval(timerId);
    console.log(timerId)
    // clearInterval(timerRef.current);

    // console.log(timerRef.current);
    // setCount(0)
  };
  return (
    <>
      <button onClick={onAdd}>+</button>
      <p>{count}</p>
      <button onClick={onSub}>-</button>
    </>
  );
};
