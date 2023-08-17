import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,addamount,removeamount } from './CounterSlice'

function CounterDisplay() {
    const val=useSelector(state=>state.count)
    const dispatch=useDispatch()
  return (
    <div>CounterDisplay
    <h1>Counter Application</h1>
    <h2>Initial value {val}</h2>
    <button onClick={()=>{dispatch(increment())}}>Increase</button>
    <button onClick={()=>{dispatch(decrement())}}>Decrease</button>
    <button onClick={()=>{dispatch(addamount(100))}}>Add 100</button>
    <button onClick={()=>{dispatch(removeamount(100))}}>Add 100</button>
    </div>
  )
}

export default CounterDisplay