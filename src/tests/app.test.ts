import {
    addTodolistAC,
    changeTodolistEntityStatusAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    clearTodolistDataAC,
    removeTodolistAC,
    setTodolistsAC,
    TodolistDomainType,
    todolistsReducer
} from "../features/TodolistsList/todolists-reducer";
import {appReducer, InitialStateType, setAppErrorAC, setAppInitializedAC, setAppStatusAC} from "../app/app-reducer";
import {authReducer, setIsLoggedInAC} from "../features/Login/authReducer";
import {
    addTaskAC,
    removeTaskAC,
    setTasksAC,
    tasksReducer,
    TasksStateType,
    updateTaskAC
} from "../features/TodolistsList/tasks-reducer";

//Tests for todolists-reducer
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
test("Entity status of Todolist should be change", () => {
    const startState: TodolistDomainType[] = [{
        "id": "1",
        "title": "Test Added Todolist",
        "addedDate": "2019-07-30T12:23:49.677",
        "order": 0,
        filter: "all",
        entityStatus: "idle"
    }]
    const action = changeTodolistEntityStatusAC("1", "loading")
    const endState = todolistsReducer(startState, action)

    expect(endState).toEqual([
        {
            "id": "1",
            "title": "Test Added Todolist",
            "addedDate": "2019-07-30T12:23:49.677",
            "order": 0,
            filter: "active",
            entityStatus: "loading"
        }
    ])
})
test("Todolist should be set", () => {
    const startState: TodolistDomainType[] = []
    const action = setTodolistsAC([
            {
                "id": "1",
                "title": "what todo",
                "addedDate": "2019-07-30T12:24:15.063",
                "order": 0
            }
        ]
    )
    const endState = todolistsReducer(startState, action)

    expect(endState).toEqual([
        {
            "id": "1",
            "title": "Test Added Todolist",
            "addedDate": "2019-07-30T12:23:49.677",
            "order": 0,
            filter: "all",
            entityStatus: "idle"
        }
    ])
})
test("All Todolists should be deleted", () => {
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
    const action = clearTodolistDataAC()
    const endState = todolistsReducer(startState, action)

    expect(endState).toEqual([])
})


//Tests for app-reducer
test("Error should be ", () => {
    const startState: InitialStateType = {
        "status": "idle",
        "error": null,
        "isInitialized": false
    }
    const action = setAppErrorAC("Error")
    const endState = appReducer(startState, action)

    expect(endState).toEqual({
        "status": "idle",
        "error": "Error",
        "isInitialized": false
    })
})
test("Status should be succeeded", () => {
    const startState: InitialStateType = {
        "status": "idle",
        "error": null,
        "isInitialized": false
    }
    const action = setAppStatusAC("succeeded")
    const endState = appReducer(startState, action)

    expect(endState).toEqual({
        "status": "succeeded",
        "error": null,
        "isInitialized": false
    })
})
test("Initialized should be true", () => {
    const startState: InitialStateType = {
        "status": "idle",
        "error": null,
        "isInitialized": false
    }
    const action = setAppInitializedAC(true)
    const endState = appReducer(startState, action)

    expect(endState).toEqual({
        "status": "idle",
        "error": null,
        "isInitialized": true
    })
})


//Tests for authReducer
test("IsLogged should be true", () => {
    const startState = {
        "isLoggedIn": false
    }
    const action = setIsLoggedInAC(true)
    const endState = authReducer(startState, action)

    expect(endState).toEqual({
        "isLoggedIn": true
    })
})


//Tests for tasks-reducer
test("Task should be remove", () => {
    const startState: TasksStateType = {
        "2": [{
            "description": "Description Task",
            "title": "Task title",
            "status": 0,
            "priority": 1,
            "startDate": "2019-07-30T12:23:49.677",
            "deadline": "2019-08-30T12:23:49.677",
            "id": "1",
            "todoListId": "2",
            "order": 0,
            "addedDate": "2019-07-30T12:23:49.677"
        }]
    }

    const action = removeTaskAC("1", "2")
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({"2": []})
})
test("Task should be added", () => {
    const startState: TasksStateType = {
        "2": []
    }

    const action = addTaskAC({
        "description": "Description Task",
        "title": "Task title",
        "status": 0,
        "priority": 1,
        "startDate": "2019-07-30T12:23:49.677",
        "deadline": "2019-08-30T12:23:49.677",
        "id": "1",
        "todoListId": "2",
        "order": 0,
        "addedDate": "2019-07-30T12:23:49.677"
    })
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        "2": [{
            "description": "Description Task",
            "title": "Task title",
            "status": 0,
            "priority": 1,
            "startDate": "2019-07-30T12:23:49.677",
            "deadline": "2019-08-30T12:23:49.677",
            "id": "1",
            "todoListId": "2",
            "order": 0,
            "addedDate": "2019-07-30T12:23:49.677"
        }]
    })
})
test("Task should be update", () => {
    const startState: TasksStateType = {
        "2": [{
            "description": "Description Task",
            "title": "Task title",
            "status": 0,
            "priority": 1,
            "startDate": "2019-07-30T12:23:49.677",
            "deadline": "2019-08-30T12:23:49.677",
            "id": "1",
            "todoListId": "2",
            "order": 0,
            "addedDate": "2019-07-30T12:23:49.677"
        }]
    }

    const model = {
        "title": "Change Task title",
        "description": "Description Task",
        "status": 0,
        "priority": 1,
        "startDate": "2019-07-30T12:23:49.677",
        "deadline": "2019-08-30T12:23:49.677"
    }
    const action = updateTaskAC("1", model, "2")
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        "2": [{
            "description": "Description Task",
            "title": "Change Task title",
            "status": 0,
            "priority": 1,
            "startDate": "2019-07-30T12:23:49.677",
            "deadline": "2019-08-30T12:23:49.677",
            "id": "1",
            "todoListId": "2",
            "order": 0,
            "addedDate": "2019-07-30T12:23:49.677"
        }]
    })
})
test("Task should be set", () => {
    const startState: TasksStateType = {}
    const tasks = [{
        "description": "Description Task",
        "title": "Task title",
        "status": 0,
        "priority": 1,
        "startDate": "2019-07-30T12:23:49.677",
        "deadline": "2019-08-30T12:23:49.677",
        "id": "1",
        "todoListId": "2",
        "order": 0,
        "addedDate": "2019-07-30T12:23:49.677"
    }]
    const action = setTasksAC(tasks, "2")
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        "2": [{
            "description": "Description Task",
            "title": "Task title",
            "status": 0,
            "priority": 1,
            "startDate": "2019-07-30T12:23:49.677",
            "deadline": "2019-08-30T12:23:49.677",
            "id": "1",
            "todoListId": "2",
            "order": 0,
            "addedDate": "2019-07-30T12:23:49.677"
        }]
    })
})


//




