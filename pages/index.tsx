import InputField from '@/components/inputfild'
import TodoList from '@/components/todolist'
import { Todo } from '@/model/model'
import React, { useState } from 'react'

const Home : React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState <Todo[]>([])

  const handleAdd = (e : React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone : false}])
      setTodo("")
    }
    
  }
 
  return (
    <div className="max-w-4xl mx-1 md:mx-auto">
      <h1 className=" uppercase text-[40px] m-[30px 0] text-white z-10 text-center">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>   
      <TodoList todos={todos} setTodos={setTodos} />  
    </div>
  )
}

export default Home