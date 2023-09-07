import { useState, useRef } from "react"
function App() {
  const inputRef = useRef(null)
  const [todoItems, setTodoItems] = useState(localStorage.getItem(todos) || [])
  function todoHandler() {


  }
  return (
    <div>
      <input type="text" onClick={todoHandler} ref={inputRef} />

    </div>
  )
}

export default App
