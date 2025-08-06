import React, { useRef } from 'react'

 // 1 . not works
// const MyInput = (props)=>{
//   console.log(props)
//   return(
//     <input type="text" placeholder='hii......'/>
//   )
// }

// 2. not works

// const MyInput = (props)=>{
//   console.log(props)
//   return(
//     <input type="text" placeholder='hii......'/>
//   )
// }

// 3. use the forward ref

import { forwardRef } from 'react'

const MyInput = forwardRef(
  (props , ref)=>{
  console.log(props)
  return(
    <input type="text" placeholder='hii......' ref={ref}  />
  )
}
)


export const Focus = () => {
  const inputRef = useRef();
  const onFocusClick = ()=>{
    inputRef.current.focus();
  }
  return (
    <>
      <MyInput placeholder='hii......' ref= {inputRef} />

       <button onClick={onFocusClick}>Focus on input</button>
    </>
  )
}
