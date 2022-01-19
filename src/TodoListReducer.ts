import {FilterValuesType, TodolistType} from "./App";
import {v1} from "uuid";


export const TodoListReducer = (state: TodolistType[], action: GeneralType):Array<TodolistType> => {
    switch (action.type) {
        case 'CHANGE-FILTER': {
            let newData = state.map(todolist=> todolist.id === action.payload.todolistId ?
                {...todolist, filter: action.payload.value}
                    : todolist)
            return  newData
        }
        case 'REMOVE-TODOLIST': {
            let newData = state.filter(tl => tl.id != action.payload.id)
            return newData
        }
        case "CHANGE-TODOLIST-TITLE": {
            let newData = state.map(todolist => todolist.id === action.payload.id
                ? {...todolist, title: action.payload.title}
                : todolist)
            return newData
        }
        case "ADD-TODOLIST": {
            let newTodolistId = v1();
            let newTodolist: TodolistType[] = {id: newTodolistId, title: action.payload.title, filter: 'all'};
            return newTodolist
        }
        default: return state
    }
}



type GeneralType = changeFilterACType
    | RemoveTodolistACType
    | ChangeTodolistTitleACType
    | AddTodolistACType
//---------------------------------------------------------
type changeFilterACType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (value: FilterValuesType, todolistId: string) => {
    return {
        type: 'CHANGE-FILTER',
        payload: {
            value: value,
            todolistId: todolistId
        }
    } as const
}
//--------------------------------------------------------

type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id: id
        }
    } as const
}

//-----------------------------------------------------------

type ChangeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>

export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id: id,
            title: title
        }
    } as const
}

//-----------------------------------------------------------

type AddTodolistACType = ReturnType<typeof addTodolistAC>

export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title: title
        }
    } as const
}