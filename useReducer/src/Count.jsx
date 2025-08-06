import React, { useReducer } from "react";
import { countReducer } from "./reducer/countreducer";

export const Count = () => {
  const intialCount = {
    count: 0
  };
  const [{ count }, countDispatch] = useReducer(countReducer, intialCount);
  
  return (
    <>
      <p>{count}</p>
      <button onClick={() => countDispatch({ type: "INC" })}>add</button>
      <button onClick={() => countDispatch({ type: "DEC" })}>remove</button>
    </>
  );
};
