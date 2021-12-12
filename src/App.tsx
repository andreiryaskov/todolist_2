import React, {useState} from "react";
import './App.css';
import Todolist, {TaskType} from "./Component/Todolist";
import {v1} from "uuid";

export type FilterValueType = 'all' | 'active' | 'completed';

type TodoListType = {
    id: string
    title: string
    filter: FilterValueType
}

type TaskStateType = {
    [key: string]: TaskType[]
}

function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState<TodoListType[]>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to Buy', filter: 'all'}
    ])
    let [tasks, setTasks] = useState<TaskStateType>({
        [todolistId1]: [
            {id: v1(), title: 'HTML5', isDone: false},
            {id: v1(), title: 'CSS3', isDone: true},
            {id: v1(), title: 'JavaScript', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Redux', isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Meat', isDone: true},
            {id: v1(), title: 'Book', isDone: true},
            {id: v1(), title: 'Coffee', isDone: true},
            {id: v1(), title: 'Tea', isDone: false}
        ]
    })

    function changeFilter(value: FilterValueType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])

        }
    }

    function addTask(inputValue: string, todolistId: string) {
        let task = {id: v1(), title: inputValue, isDone: false}
        let todoListTasks = tasks[todolistId]
        tasks[todolistId] = [task, ...todoListTasks]
        setTasks({...tasks})
    }

    function removeTask(eventId: string, todolistId: string) {
        let todoListTasks = tasks[todolistId]
        tasks[todolistId] = todoListTasks.filter(t => t.id != eventId)
        setTasks({...tasks})
    }

    function changeStatus(eventId: string, isDone: boolean, todolistId: string) {
        let todoListTasks = tasks[todolistId]
        let task = todoListTasks.find(t => t.id === eventId)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }

    function removeTodoList(id: string) {
        setTodolists(todolists.filter(tl => tl.id != id))
        delete tasks[id]
        setTasks({...tasks})
    }


    return (
        <div className={'app_wrapper'}>
            {
                todolists.map(tl => {
                        let allTodoListTasks = tasks[tl.id]
                        let tasksForTodoList = allTodoListTasks

                        if (tl.filter === 'active') {
                            tasksForTodoList = allTodoListTasks.filter(t => t.isDone === false)
                        }
                        if (tl.filter === 'completed') {
                            tasksForTodoList = allTodoListTasks.filter(t => t.isDone === true)
                        }

                        return <Todolist removeTask={removeTask}
                                         addTask={addTask}
                                         tasks={tasksForTodoList}
                                         changeFilter={changeFilter}
                                         changeTaskStatus={changeStatus}
                                         removeTodoList={removeTodoList}
                                         filter={tl.filter}
                                         title={tl.title}
                                         key={tl.id}
                                         id={tl.id}
                        />
                    }
                )
            }
        </div>
    )
}

export default App;