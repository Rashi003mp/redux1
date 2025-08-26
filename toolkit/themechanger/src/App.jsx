import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./redux/slice";


function App() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  // Directly apply background + text color
  useEffect(() => {
    if (mode === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }, [mode]);

  return (
    <div>
      <h1>{mode} Mode</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Switch Theme
      </button>
    </div>
  );
}

export default App;
