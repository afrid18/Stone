import { useState } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoText.trim(" ") === "") return;
    const newTodo = { text: todoText, id: Date.now() };
    setTodos([...todos, newTodo]);
    setTodoText("");
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {todo.text} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
