export type RequestStatusType = 'loading' | 'idel' | 'succeeded' | 'failed'
export type SetStatusActionType = ReturnType<typeof setStatusAC>
export type ActionType = SetStatusActionType
export type InitialStateType = typeof initialState


const initialState = {
    status: 'loadin' as RequestStatusType
}


export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}


export const setStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)

