import React, {useState} from "react";
import './App.css';
import Todolist from "./Component/Todolist";
import {v1} from "uuid";

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML5', isDone: true},
        {id: v1(), title: 'CSS3', isDone: true},
        {id: v1(), title: 'JavaScript', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false}
    ])

    function addTask(inputValue: string) {
        let task = {id: v1(), title: inputValue, isDone: false}
        let newTask = [task, ...tasks]
        setTasks(newTask)
    }

    return(
        <div className={'app_wrapper'}>
          <Todolist tasks={tasks} title={'What to learn'} addTask={addTask}/>
        </div>
    )
}

export default App;