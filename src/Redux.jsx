import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Counterslice'

const Redux = () => {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}
  

export default Redux