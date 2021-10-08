import { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{onAddToDo: (text: string) => void}> = ({onAddToDo}) => {
    const todoText = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        // ? нужен на случай если мы не сконнектили useref с элементом, в таком случае вернет undefined. Если уверены, что все подключили - можем заменить на !
        const enteredText = todoText.current!.value;

        if (enteredText?.trim().length === 0){
            return;
        }

        onAddToDo(enteredText);
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