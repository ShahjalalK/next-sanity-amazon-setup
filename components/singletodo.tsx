import { Todo } from '@/model/model'
import {MdModeEditOutline} from 'react-icons/md'
import {AiTwotoneDelete, AiOutlineCheck} from 'react-icons/ai'
interface Props{
    todo : Todo;
    todos : Todo[];
   setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo : React.FC<Props> = ({todo, todos, setTodos} : Props) => {
  return (
    <div className=" flex-grow flex items-center bg-yellow-400 text-white shadow-md font-bold capitalize">
        <h3 className=" p-3 flex-grow">{todo.todo}</h3>
        <div className="flex items-center space-x-1 mr-1">
            <button><MdModeEditOutline /></button>
            <button><AiTwotoneDelete /></button>
            <button><AiOutlineCheck /></button>
        </div>
    </div>
  )
}

export default SingleTodo