import React from "react";
import { useSelector } from "react-redux";

function CounterDisplay() {
  const count = useSelector((state) => state.count); // access state
  return <h1>Count: {count}</h1>;
}

export default CounterDisplay;
