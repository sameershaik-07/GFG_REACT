
// import { useState } from 'react'
import './App.css'
import { Button } from './components/Button' 
import { useCount } from './context/count-context'
function App() {

  // console.log(useCount);
  const {setCount} = useCount();
  // console.log(value);

  // const [count, setCount] = useState(0)
  const onButtonClick =()=>{
    setCount(count +1);
  }
  return (
    <>
      <Button   onButtonClick={onButtonClick}/>
    </>
  )
}

export default App
