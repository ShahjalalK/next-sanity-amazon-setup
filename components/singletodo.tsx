import { Todo } from '@/model/model'
import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {todoState} from '../state/todostate'
import {useRecoilState} from 'recoil'
interface Props {
    todo : Todo
}

const SingleTodo : React.FC<Props> = ({todo} : Props) => {
    const [todos, setTodos] = useRecoilState<Todo[]>(todoState)
    const deleteHandler = (id : number) => {
       setTodos(todos.filter((item) => item.id !==id))
    }
  return (
    <div className="flex items-center flex-grow text-xl rounded-md bg-yellow-400 p-3">
       <div className="flex-grow"> {todo.todo}</div>
       <button onClick={() => deleteHandler(todo.id)}><AiFillDelete /></button>
    </div>
  )
}

export default SingleTodo