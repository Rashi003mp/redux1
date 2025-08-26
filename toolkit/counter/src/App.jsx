import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice';

function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch()
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>add by 5</button>
    </div>
  )
}

export default App