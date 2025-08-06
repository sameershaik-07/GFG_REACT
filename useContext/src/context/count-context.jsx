import { createContext, useContext, useState } from "react";

const intialState = {
  count: 0,
};

const CountContext = createContext(intialState);

console.log(CountContext)

// Provider ........................

// create context gives the two things ,  1 is provide and another 1 is consumer
const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // since the the key and the value is the same so it is not required to the give the value or key both we can write it as the below.
  // <CountContext.Provider value = {{count : count  , setCount : setCount }}>
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

// Consumer ...................

// custom hook

// function useCount (){
//   return useContext(CountContext);
// }

// or

const useCount = () => useContext(CountContext);

// a custom hook always returns a hook

// eslint-disable-next-line react-refresh/only-export-components
export { useCount, CountProvider };
