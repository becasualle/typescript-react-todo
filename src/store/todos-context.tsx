import Todo from "../models/todo";
import React, { useState } from "react";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text:string)=>void;
    removeTodo: (id:string)=>void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: ()=>{},
    removeTodo: (id:string) => {}
});

const TodosContextProvider: React.FC = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text:string)=>{
        setTodos(prevTodos => prevTodos.concat(new Todo(text)))
    }

    const removeTodoHandler = (todoId: string)=>{
        setTodos((prevTodos) => prevTodos.filter(todo=> todo.id !== todoId))
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodosContext.Provider value={contextValue}>
        {children}
    </TodosContext.Provider>
}

export default TodosContextProvider;