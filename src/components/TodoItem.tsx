import React from 'react'
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{id:string, text:string, onRemoveTodo: (id:string)=>void }> = ({id, text, onRemoveTodo}) => {
    return (
        <li className={classes.item} onClick={() => onRemoveTodo(id)}>{text}</li>
    )
}

export default TodoItem;
