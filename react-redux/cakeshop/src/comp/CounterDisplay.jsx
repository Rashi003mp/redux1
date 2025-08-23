import React from "react";
import { useDispatch } from "react-redux";

function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default CounterButtons;
