import AddMenu from "@/components/addmenu"
import { useState } from "react"
import {useRecoilState} from 'recoil'
import {todoState} from "../state/todostate"
import { Todo } from "@/model/model"
import TodoList from "@/components/todolists"

const Home : React.FC = () => {
  const [textValue, setTextValue] = useState<string>('')
  const [todos, setTodos] = useRecoilState<Todo[]>(todoState)
 
  const addTodo = (e : React.FormEvent) => {
    e.preventDefault()  
   if(textValue){
    setTodos([...todos, {id:Date.now(), todo : textValue}])
    setTextValue("")

   }else{
    return
   }
    
  }

  
 
 
   return (
    <div className="max-w-5xl mx-auto my-5">
      <h1 className="text-3xl text-center">Todo List</h1>
      <AddMenu addTodo={addTodo} textValue={textValue} setTextValue={setTextValue}/>
    <TodoList />
    </div>
  )
}

export default Home