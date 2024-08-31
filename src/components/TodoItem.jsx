import { useContext } from "react";
import {setTodoContext} from '../context';

export default function TodoItem(props) {
  const { id, completed, text, timeStamp, toggleTodo } = props;
  const {setTodoItems} = useContext(setTodoContext);

  function deleteTodo(id) {
    setTodoItems((currTodos) => {
      return currTodos.filter((todo) => todo.id != id);
    });
  }

  return (
    <li key={id} className="todo__item">
      <span className="todo__text">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {text}
      </span>
      <span title="added time" className="todo__date">
        {timeStamp}
      </span>
      <button onClick={() => deleteTodo(id)}>Remove</button>
    </li>
  );
}
