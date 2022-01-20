import {
    addSalary,
    AddSalaryActionType,
    divSalary,
    fallSalary,
    GeneralType,
    multiplySalary,
    salaryReducer
} from "./tasks";

test('addSalary', () => {
    // 1.тестовые данные
    const salary: number = 700
    const bonus: number = 250
    //2. выполнение тестируемого кода
    const result = addSalary(salary, bonus)
    //3. Проверка ожидаемого результата
    expect(result).toBe(950)
})

test('fallSalary', () => {
    //
    const salary: number = 700
    const minus: number = 50
    //2. выполнение тестируемого кода
    const result1 = fallSalary(salary, minus)
    //3. Проверка ожидаемого результата
    expect(result1).toBe(650)
})

test('multiplySalary', () => {
    //
    const salary: number = 700
    const coeff: number = 1.2
    //2. выполнение тестируемого кода
    const result2 = multiplySalary(salary, coeff)
    //3. Проверка ожидаемого результата
    expect(result2).toBe(840)
})

test('divSalary', () => {
    //
    const salary: number = 700
    const coeff: number = 1
    //2. выполнение тестируемого кода
    const result3 = divSalary(salary, coeff)
    //3. Проверка ожидаемого результата
    expect(result3).toBe(700)
})

test('case add salary', () => {
    const salary = 700
    const xxx: GeneralType = {
        type: 'ADD-SALARY',
        bonus: 300
    }
    expect(salaryReducer(salary, xxx)).toBe(1000)
})

test('case add salary', () => {
    const salary = 700
    const xxx: GeneralType = {
        type: 'FALL-SALARY',
        minus: 300
    }
    expect(salaryReducer(salary, xxx)).toBe(400)
})

test('case add salary', () => {
    const salary = 700
    const xxx: GeneralType = {
        type: 'MULT-SALARY',
        coeff: 2
    }
    expect(salaryReducer(salary, xxx)).toBe(1400)
})
//
test('case add salary', () => {
    const salary = 700
    const xxx: GeneralType = {
        type: 'MULT-SALARY',
        coeff: 0.5
    }
    expect(salaryReducer(salary, xxx)).toBe(350)
})
