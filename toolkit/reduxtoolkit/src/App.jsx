import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/slice'

function App() {
  const count = useSelector((s) => s.counter.value)
  const dispatch =useDispatch()
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>add</button>
    </>
  )
}

export default App