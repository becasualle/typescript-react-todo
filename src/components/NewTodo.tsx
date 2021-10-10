import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const todoText = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = todoText.current!.value;

        if (enteredText?.trim().length === 0){
            return;
        }

        todosCtx.addTodo(enteredText);
    };

    return ( 
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id='text' ref={todoText}/>
            <button>Add Todo</button>
        </form>
     );
}
 
export default NewTodo;