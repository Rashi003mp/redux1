import { createSlice } from '@reduxjs/toolkit'

let nextId = 1

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: nextId++,
                text: action.payload,
                completed: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.filter((t) =>
                t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        removeTodo: (state, action) => {
            return state.filter((t) =>
                t.id !== action.payload)
        },
        editTodo:(state,action)=>{
            const {id,newText}=action.payload;
            const todo = state.find((t)=>t.id===id);
            if (todo){
                todo.text=newText
            }
        }
    }
})

export const {addTodo, toggleTodo, removeTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;