import {TaskType} from "./Todolist";
import {v1} from "uuid";

export const TaskReducer = (state: TaskType[], action: GeneralType) => {
    switch(action.type) {
        case 'REMOVE-TASK': {
            return state.filter(t => t.id != action.id)
        }
        case 'ADD-TASK': {
            let task = { id: v1(), title: action.payload.title, isDone: false };
            return [task, ...state];
        }
        default: return state
    }
}

type GeneralType = removeTaskACType
| addTaskACType
type removeTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string) => {
    //возвращаем объект
    return {
        type: 'REMOVE-TASK',
        id: id
    } as const
}
//---------------------------------------------
type addTaskACType = ReturnType<typeof addTaskAC>

export const addTaskAC = (title: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            title,
        }
    } as const
}