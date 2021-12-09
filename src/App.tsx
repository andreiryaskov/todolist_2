import React from "react";
import './App.css';
import Todolist from "./Component/Todolist";
import {v1} from "uuid";



let tasks = [
    {id: v1(), title: 'HTML5', isDone: true},
    {id: v1(), title: 'CSS3', isDone: true},
    {id: v1(), title: 'JavaScript', isDone: true},
    {id: v1(), title: 'React', isDone: false},
    {id: v1(), title: 'Redux', isDone: false}
]

function App() {
    return(
        <div className={'app_wrapper'}>
          <Todolist tasks={tasks} title={'What to learn'}/>
        </div>
    )
}

export default App;