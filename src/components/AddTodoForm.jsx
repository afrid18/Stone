import { useSetRecoilState } from "recoil";
import { useRef } from 'react'
import { todoState } from "../store/todoState";

export default function AddTodoForm({ setErrorMsg }) {
  const inputRef = useRef(null);
  const setTodoItems = useSetRecoilState(todoState);

  function todoHandler(e) {
    e.preventDefault();
    const todo = inputRef.current.value;
    if (!todo) {
      setErrorMsg("please add todo..");
      return;
    }
    setTodoItems((prev) => {
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          text: todo,
          completed: false,
          timeStamp: new Date().toLocaleTimeString(),
        },
      ];
    });
    inputRef.current.value = "";
  }

  return (
    <form className="row a-center j-ccenter">
      <input
        placeholder="Enter New To-Do"
        type="text"
        className="todo__input"
        id="todoItem"
        ref={inputRef}
        autoComplete="off"
      />
      <button className="todo__add-btn" onClick={todoHandler}>
        Add
      </button>
    </form>
  );
}
