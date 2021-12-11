import React, {useState} from "react";
import './App.css';
import Todolist from "./Component/Todolist";
import {v1} from "uuid";

export type FilterValueType = 'all' | 'active' | 'completed';

type TodoListType = {
    id: string
    title: string
    filter: string
}

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML5', isDone: false},
        {id: v1(), title: 'CSS3', isDone: true},
        {id: v1(), title: 'JavaScript', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: true}
    ])

    function addTask(inputValue: string) {
        let task = {id: v1(), title: inputValue, isDone: false}
        let newTask = [task, ...tasks]
        setTasks(newTask)
    }

    function removeTask(eventId: string) {
        let filteredTasks = tasks.filter(t => t.id != eventId)
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FilterValueType>('all')

    let taskForTodoList = tasks

    if (filter === 'active') {
        taskForTodoList = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        taskForTodoList = tasks.filter(t => t.isDone === true)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }

    let [todoLists, setTodoLists] = useState([
        {id: v1(), title: 'What to learn', filter: 'all'},
        {id: v1(), title: 'What to Buy', filter: 'all'}
    ])

    function changeStatus(eventId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === eventId)
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }

    return (
        <div className={'app_wrapper'}>
            {todoLists.map(tl =>
                <Todolist title={tl.title}
                          id={tl.id}
                          key={tl.id}
                          filter={tl.filter}
                          removeTask={removeTask}
                          tasks={taskForTodoList}
                          addTask={addTask}
                          changeFilter={changeFilter}
                          changeTaskStatus={changeStatus}/>
            )}
        </div>
    )
}

export default App;