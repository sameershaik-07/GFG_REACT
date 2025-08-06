import React from 'react'
import { useCount } from '../../context/count-context'
export const Text = ({count}) => {
  const {count} =  useCount(); 
  return (
    <p>count - {count}</p>
  )
}
