import TodoItem from "./TodoItem";

export default function TodoList({ todoItems, toggleTodo, setTodoItems }) {
  return (
    <ul role="list" className="todo__list">
      {todoItems.length === 0 && "No To-Dos"}
      {todoItems.map((todo) => {
        return (
          <TodoItem
            {...todo}
            toggleTodo={toggleTodo}
            key={todo.id}
            setTodoItems={setTodoItems}
          />
        );
      })}
    </ul>
  );
}
