// import { useState } from 'react'

import { useState , useEffect } from 'react'
import './App.css'
import { CleanupFunction } from './CleanupFunction';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [products ,setProducts] = useState([]);

  const getData = async (URL)=>{
    try {
      const {data : {products}} = await axios.get(URL) 
      console.log(products);
      setProducts(products);
    }catch(err){
      return err;
    }
  }

  useEffect(()=>{
    const URL = "https://dummyjson.com/products"
    getData(URL);
  } , [count])
  return (
    <>
          <button onClick={()=>{setCount(count +1)}}>click - {count }</button>
    {
      products && products.length >0 && products.map(product => <p>{product.title}</p>)
    }
    {/* <CleanupFunction /> */}
    </>


  )
}

export default App
