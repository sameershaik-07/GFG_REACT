import React, { useEffect, useState } from 'react'

export const CleanupFunction = () => {
  const [count  , setCount] = useState(0);
 
  useEffect(()=>{
    const timeId = setTimeout(()=>{
      setCount(count => count +1);
    } , 1000);

    return ()=>{
      clearInterval(timeId);
    }
  } 

)
  return (
    <>
      <p>count = {count }</p>
    </>
  )
}
