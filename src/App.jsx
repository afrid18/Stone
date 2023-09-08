import { useState, useRef, useEffect } from "react";
import "./App.css"
function App() {
  const inputRef = useRef(null)
  const [errorMsg, setErrorMsg] = useState("")
  const [todoItems, setTodoItems] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  function todoHandler(e) {

    e.preventDefault();
    const todo = inputRef.current.value;
    if (!todo) {
      setErrorMsg("please add todo..")
      return
    }
    setTodoItems((prev) => {
      return [...prev, { 'text': todo, timeStamp: new Date().toLocaleTimeString() }]
    })

  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoItems))
    inputRef.current.value = "";
    setErrorMsg("")
  }, [todoItems])


  return (
    <>
      <h1 className="heading">Make things Happen</h1>
      <div className="todo">
        <p className="error">{errorMsg}</p>
        <form className="row a-center j-ccenter">
          <label htmlFor="todoItem" >Toodo</label>
          <input type="text" className="todo__input" id="todoItem" ref={inputRef} />
          <button className="todo__add-btn" onClick={todoHandler}>Add</button>
        </form>
        <ul role="list" className="todo__list">
          {
            todoItems.map((todo) => {
              return <li key={todo.timeStamp} className="todo__item"><span className="todo__text">{todo.text}</span><span title="added time" className="todo__date">{todo.timeStamp}</span></li>
            })
          }
        </ul>

      </div>
    </>
  )
}

export default App
