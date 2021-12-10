import React, {useState} from "react";
import './App.css';
import Todolist from "./Component/Todolist";
import {v1} from "uuid";

export type FilterValueType = 'all' | 'active' | 'completed';

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
        let filteredTask = tasks.filter(t => t.id != eventId)
        setTasks(filteredTask)
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

    return (
        <div className={'app_wrapper'}>
            <Todolist removeTask={removeTask}
                      tasks={taskForTodoList}
                      title={'What to learn'}
                      addTask={addTask}
                      changeFilter={changeFilter}/>
        </div>
    )
}

export default App;