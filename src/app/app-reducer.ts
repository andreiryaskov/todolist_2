export type RequestStatusType = 'loading' | 'idle' | 'succeeded' | 'failed'
export type SetStatusActionType = ReturnType<typeof setStatusAC>
export type SetErrorActionType = ReturnType<typeof setAppErrorAC>
export type ActionType =
    | SetStatusActionType
    | SetErrorActionType
export type InitialStateType = typeof initialState
export type NullableType<T> = null | T


const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as NullableType<string>
}


export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS": {
            return {...state, status: action.status}
        }
        case "APP/SET-ERROR": {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}


export const setStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: NullableType<string>) => ({type: 'APP/SET-ERROR', error} as const)

