import React from 'react'
import {todoState} from '../state/todostate'
import {useRecoilValue} from 'recoil'
import { Todo } from '@/model/model'
import SingleTodo from './singletodo'

const TodoList : React.FC = () => {  
    const todos  = useRecoilValue(todoState)
   
  return (
    <div className="grid grid-cols-2 gap-5 grid-flow-dense">
      {todos.map((todo) => (
         <SingleTodo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList