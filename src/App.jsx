import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { todoState } from "./store/todoState";
import "./App.css";

function App() {
  const [errorMsg, setErrorMsg] = useState("");
  const [todoItems, setTodoItems] = useRecoilState(todoState);

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
      <h1 className="heading">Your Todos</h1>
      <div className="todo">
        <p className="error">{errorMsg}</p>
          <AddTodoForm setErrorMsg={setErrorMsg} />
          <TodoList
            toggleTodo={toggleTodo}
          />
      </div>
    </>
  );
}

export default App;
