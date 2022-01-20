import {TasksStateType} from "./App";
import {v1} from "uuid";


export const TaskReducer = (state: TasksStateType, action: GeneralType):TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let todolistTasks = state[action.payload.todolistId]
            const newTasks =  {
                ...state,
                [action.payload.todolistId] : todolistTasks.filter(task => task.id !== action.payload.id)
            }
            return newTasks
        }
        case 'ADD-TASK': {
            debugger
            let task = {id: v1(), title: action.payload.title, isDone: false}
            let todolistTasks = state[action.payload.todolistId]
            state[action.payload.todolistId] = [task, ...todolistTasks]
            return {...state}
        }
        case 'CHANGE-TASK': {
            let todolistTasks = state[action.payload.todolistId]
            let task = todolistTasks.find(t => t.id === action.payload.id)
            if (task) {
                task.title = action.payload.newTitle;
            }
            return {...state}
        }
        case 'CHANGE-STATUS': {
            //достанем нужный массив по todolistId:
            let todolistTasks = state[action.payload.todolistId]
            // найдём нужную таску:
            let task = todolistTasks.find(t => t.id === action.payload.id)
            //изменим таску, если она нашлась
            if (task) {
                task.isDone = action.payload.isDone
                return {...state}
            }
        }
        case 'REMOVE-TODOLIST-AND-TASKS': {
            delete state[action.payload.id]
            return state
        }
        case "ADD-TODOLIST-AND-TASKS": {
            // let newTodolistId = v1();
            const newTasks = {
                ...state,
                [action.payload.newTodolistId]: []
            }
            return newTasks
        }
        default: return state
    }
}
type GeneralType = RemoveTaskACType
    | AddTaskACType
    | ChangeTaskTitleACType
    | ChangeStatusACType
    | RemoveTodolistAndTasksAC
    | AddTodolistAndTasksAC

//-------------------------------------------------------------------
type RemoveTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string, todolistId: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {
            id: id,
            todolistId: todolistId
        }
    } as const
}
//---------------------------------------------------------------------

type AddTaskACType = ReturnType<typeof addTaskAC>

export const addTaskAC = (title: string, todolistId: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            title: title,
            todolistId: todolistId
        }
    } as const
}

//--------------------------------------------------------------------------

type ChangeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>

export const changeTaskTitleAC = (id: string, newTitle: string, todolistId: string) => {
    return {
        type: 'CHANGE-TASK',
        payload: {
            id: id,
            newTitle: newTitle,
            todolistId: todolistId
        }
    } as const
}
//-----------------------------------------------------------------------

type ChangeStatusACType = ReturnType<typeof changeStatusAC>

export const changeStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'CHANGE-STATUS',
        payload: {
            id: id,
            isDone: isDone,
            todolistId: todolistId
        }
    } as const
}

//-------------------------------------------------------------------------

type RemoveTodolistAndTasksAC = ReturnType<typeof removeTodolistAndTasksAC>

export const removeTodolistAndTasksAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST-AND-TASKS',
        payload: {
            id: id
        }
    } as const
}

//-----------------------------------------------------------------------

type AddTodolistAndTasksAC = ReturnType<typeof addTodolistAndTasksAC>

export const addTodolistAndTasksAC = (newTodolistId: string) => {
    return {
        type: 'ADD-TODOLIST-AND-TASKS',
        payload: {
            newTodolistId: newTodolistId
        }
    } as const
}