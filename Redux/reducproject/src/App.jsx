import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
    const value = useSelector((state) => {
        return state.value

    })
    console.log(value);
    const dispatch = useDispatch()

    return (
        <>
            <h1>count:{value}</h1>
            <button onClick={() => {
                dispatch({
                    type: 'increment'
                })
            }}>+</button>
            <button onClick={() => {
                dispatch({
                    type: 'decrement'
                })
            }} >-</button>
        </>
    )
}

export default App