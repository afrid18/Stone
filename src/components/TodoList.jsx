import TodoItem from "./TodoItem";
import { useContext } from "react";
import {setTodoContext} from '../context';

export default function TodoList({toggleTodo}) {
  
  const {todoItems} = useContext(setTodoContext);

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
