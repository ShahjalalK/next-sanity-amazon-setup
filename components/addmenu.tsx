import React from "react";
import { MdAddCircle } from "react-icons/md";

interface Props {
    textValue : string;
    setTextValue : React.Dispatch<React.SetStateAction<string>>
  addTodo: (e: React.FormEvent) => void;
}

const AddMenu: React.FC<Props> = ({ addTodo, textValue, setTextValue}: Props) => {
  return (
    <form
      onSubmit={addTodo}
      className="flex flex-grow bg-black my-5 cursor-pointer rounded-md overflow-hidden mx-1 md:mx-auto"
    >
      <input
        className="flex-grow px-4 py-2 focus:outline-none"
        type="text"
        placeholder="Type your todo list...."
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button>
        <MdAddCircle className="text-4xl text-white" />
      </button>
    </form>
  );
};

export default AddMenu;
