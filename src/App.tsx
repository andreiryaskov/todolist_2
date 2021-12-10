import React, {useState} from "react";
import './App.css';
import Todolist from "./Component/Todolist";
import {v1} from "uuid";

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

    return (
        <div className={'app_wrapper'}>
            <Todolist removeTask={removeTask}
                      tasks={tasks}
                      title={'What to learn'}
                      addTask={addTask}/>
        </div>
    )
}

export default App;