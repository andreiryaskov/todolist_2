

export const addSalary = (salary: number, bonus: number) => salary + bonus
export const fallSalary = (salary: number, minus: number) => salary - minus
export const multiplySalary = (salary: number, coeff: number) => salary * coeff
export const divSalary = (salary: number, coeff: number) => salary / coeff

// 1.в параметрах у всех salary
// 2.тип действия в названии(action type)
// 3.дополнительные значения для каждого типа действия

export type AddSalaryActionType = {
    type: 'ADD-SALARY'
    bonus: number
}
export type fallSalaryActionType = {
    type: 'FALL-SALARY'
    minus: number
}
export type multSalaryActionType = {
    type: 'MULT-SALARY'
    coeff: number
}


export type GeneralType = AddSalaryActionType
    | fallSalaryActionType
    | multSalaryActionType

export const salaryReducer = (salary: number, action: GeneralType) => {
    switch (action.type) {
        case 'ADD-SALARY': {
            return salary + action.bonus
        }
        case 'FALL-SALARY': {
            return salary - action.minus
        }
        case 'MULT-SALARY': {
            return salary * action.coeff
        }
        default: return salary
    }
}
