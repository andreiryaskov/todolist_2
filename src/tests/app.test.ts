import {
    addTodolistAC, changeTodolistFilterAC, changeTodolistTitleAC,
    removeTodolistAC,
    TodolistDomainType,
    todolistsReducer
} from "../features/TodolistsList/todolists-reducer";


test("New todolist should be added", () => {
    const startState: TodolistDomainType[] = []
    const action = addTodolistAC({
        "id": "1",
        "title": "Test Added Todolist",
        "addedDate": "2019-07-30T12:23:49.677",
        "order": 0
    })
    const endState = todolistsReducer(startState, action)

    expect(endState).toEqual([{
        "id": "1",
        "title": "Test Added Todolist",
        "addedDate": "2019-07-30T12:23:49.677",
        "order": 0,
        filter: "all",
        entityStatus: "idle"
    }])
})

test("Todolist should be remove", () => {
    const startState: TodolistDomainType[] = [
        {
            "id": "1",
            "title": "Test Added Todolist",
            "addedDate": "2019-07-30T12:23:49.677",
            "order": 0,
            filter: 'all',
            entityStatus: 'idle'
        }
    ]
    const action = removeTodolistAC("1")
    const endState = todolistsReducer(startState, action)

    expect(endState).toEqual([])
})

test("Title of Todolist should be changed", () => {
    const startState: TodolistDomainType[] = [
        {
            "id": "1",
            "title": "Test Added Todolist",
            "addedDate": "2019-07-30T12:23:49.677",
            "order": 0,
            filter: "all",
            entityStatus: "idle"
        }
    ]

    const action = changeTodolistTitleAC("1", "Change Todolist Title")

    const endState = todolistsReducer(startState, action)

    expect(endState).toEqual([
        {
            "id": "1",
            "title": "Change Todolist Title",
            "addedDate": "2019-07-30T12:23:49.677",
            "order": 0,
            filter: "all",
            entityStatus: "idle"
        }
    ])
})

test("Filter of Todolist should be changed", () => {
    const startState: TodolistDomainType[] = [{
        "id": "1",
        "title": "Test Added Todolist",
        "addedDate": "2019-07-30T12:23:49.677",
        "order": 0,
        filter: "all",
        entityStatus: "idle"
    }]
    const action = changeTodolistFilterAC("1", "active")
    const endState = todolistsReducer(startState, action)

    expect(endState).toEqual([
        {
            "id": "1",
            "title": "Test Added Todolist",
            "addedDate": "2019-07-30T12:23:49.677",
            "order": 0,
            filter: "active",
            entityStatus: "idle"
        }
    ])
})