import React from "react";
import CounterDisplay from "./comp/first";
import CounterButtons from "./comp/CounterDisplay";
// import CounterDisplay from "./CounterDisplay";
// import CounterButtons from "./CounterButtons";

function App() {
  return (
    <div>
      <CounterDisplay />
      <CounterButtons />
    </div>
  );
}

export default App;
