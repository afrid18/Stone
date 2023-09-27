import { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [errorMsg, setErrorMsg] = useState("");
  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem("todos")) || [],
  );

  function toggleTodo(id, completed) {
    console.log(completed);
    setTodoItems((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
    console.log(todoItems);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
    setErrorMsg("");
  }, [todoItems]);

  return (
    <>
      <h1 className="heading">Make things Happen</h1>
      <div className="todo">
        <p className="error">{errorMsg}</p>
        <AddTodoForm setTodoItems={setTodoItems} setErrorMsg={setErrorMsg} />
        <TodoList
          todoItems={todoItems}
          toggleTodo={toggleTodo}
          setTodoItems={setTodoItems}
        />
      </div>
    </>
  );
}

export default App;
