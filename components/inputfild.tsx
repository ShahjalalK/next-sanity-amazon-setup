
import {MdOutlineAddCircle} from 'react-icons/md'

interface Props {
    todo : string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e : React.FormEvent) => void

}
const InputField : React.FC<Props> = ({todo, setTodo, handleAdd} : Props) => {
  return (
 
    <form onSubmit={handleAdd} className="flex flex-grow cursor-pointer outline-none bg-black shadow-md items-center w-full rounded-md overflow-hidden ">
         <input type="text" placeholder="Enter a task" className="flex-grow h-10 px-4 p-1 focus:outline-none" value={todo} onChange={(e) => setTodo(e.target.value)} />
       <button type='submit'><MdOutlineAddCircle className="text-4xl text-white" /></button>
    </form>
  )
}

export default InputField
