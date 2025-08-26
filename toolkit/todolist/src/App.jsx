import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo, editTodo, removeTodo, toggleTodo } from './redux/todoSlice'

function App() {

  const [task, setTask] = useState("")
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('')

  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  const handleEditSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newText: editText.trim() }));
      setEditId(null);
      setEditText("")
    }
  }

  return (
    <>
      <h1>TODO LIST</h1>
      <input type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Enter a task'
      />
      <button onClick={handleClick}>add</button>
      {/* //listing */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {editId === todo.id ? (
              <>
              <input 
              type="text" 
              value={editText}
              onChange={(e)=>setEditText(e.target.value)}
              />
              <button onClick={()=>handleEditSave(todo.id)} >Save</button>
              <button onClick={()=>setEditId(null)} >Cancel</button>
              </>
            ) : (
              <>
              <span>{todo.text}</span>
              <button onClick={()=>{
                setEditId(todo.id);
                setEditText(todo.text)
              }}>edit</button>
              <button onClick={()=>dispatch(removeTodo(todo.id))}>remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App