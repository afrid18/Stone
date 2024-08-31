import { createContext } from "react";

export const setTodoContext = createContext({
    todoItems: 0, 
    setTodoItems: ()=>{}
})