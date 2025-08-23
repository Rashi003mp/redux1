import { createStore } from "redux";

const intailState = {
    value: 0,
    mark: 155
};

const reducer = (prevState = intailState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...prevState,
                value: prevState.value + 1
            };
        case 'decrement':
            return {
                ...prevState,
                value: prevState.value - 1
            }
        default:
            return prevState

    }

}

const Store = createStore(reducer)

export default Store