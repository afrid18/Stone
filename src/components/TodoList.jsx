import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { todoState } from "../store/todoState";


export default function TodoList({toggleTodo}) {
  const todoItems = useRecoilValue(todoState);

  return (
    <ul role="list" className="todo__list">
      {todoItems.length === 0 && "No To-Dos"}
      {todoItems.map((todo) => {
        return (
          <TodoItem
            {...todo}
            toggleTodo={toggleTodo}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}
