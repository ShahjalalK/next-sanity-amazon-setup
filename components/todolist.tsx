import { Todo } from '@/model/model'
import React from 'react'
import SingleTodo from './singletodo';
interface Props {
    todos : Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList : React.FC<Props> = ({todos, setTodos} : Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 grid-flow-dense mx-1 md:mx-auto my-5">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
       
    </div>
  )
}

export default TodoList
