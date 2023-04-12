import { Todo } from "@/model/model";
import { atom } from "recoil";

export const todoState  = atom <Todo[]>({
    key : 'todoState',
    default : []
})