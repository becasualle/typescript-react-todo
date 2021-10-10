import React, {useContext} from 'react'
import { TodosContext } from '../store/todos-context';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{id:string, text:string}> = ({id, text}) => {
    const todosCtx = useContext(TodosContext)
    return (
        <li className={classes.item} onClick={() =>todosCtx.removeTodo(id)}>{text}</li>
    )
}

export default TodoItem;
