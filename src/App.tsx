import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
    //  new Todo('Learn React'),
    // new Todo('Learn TypeScript')
  const addTodoHandler = (text:string)=>{
    // setTodos([...todos, new Todo(text)]);
    setTodos(prevTodos => prevTodos.concat(new Todo(text)))
  }

  const removeTodoHandler = (todoId: string)=>{
   setTodos((prevTodos) => prevTodos.filter(todo=> todo.id !== todoId))
  }

  // const items: string[] = ['Learn React', 'Learn TypeScript']
  return (
    <div >
      <NewTodo onAddToDo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
