import { createStore } from "redux";

// Reducer (manages state changes)
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Create store
export const store = createStore(counterReducer);
