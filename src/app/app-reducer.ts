export type RequestStatusType = 'loading' | 'idel' | 'succeeded' | 'failed'

const initialState = {
    status: 'loadin' as RequestStatusType
}

export type InitialStateType = typeof initialState

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

export type SetStatusActionType = ReturnType<typeof setStatusAC>

type ActionType = SetStatusActionType