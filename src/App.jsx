import { useState, useRef } from "react"
function App() {
  const inputRef = useRef(null)
  const [todoItems, setTodoItems] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  function todoHandler() {
    const todo = inputRef.current.value;
    setTodoItems((prev) => {
      return [...prev, { 'text': todo }]
    })
    localStorage.setItem('todos', JSON.stringify(todoItems))
    inputRef.current.value = "";
  }
  return (
    <div>
      <label for="todoItem">Toodo</label>
      <input type="text" id="todoItem" ref={inputRef} />
      <button onClick={todoHandler}>Add</button>
      {
        todoItems.map((todo, index) => {
          return <p className="todo__item">{todo.text}</p>
        })
      }
    </div>
  )
}

export default App
