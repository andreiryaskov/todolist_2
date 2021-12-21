import React, {useState} from 'react';
import TodoList from "./todoList";
import {v1} from "uuid";

const App = () => {

    let [tasks, setTask] = useState([
        {id: v1(), title: 'jjkn', isDone: true},
        {id: v1(), title: 'jjfdok;', isDone: true},
        {id: v1(), title: ',mlkj', isDone: false},
        {id: v1(), title: 'jj', isDone: false}
    ])

    const deleteTask = (id: string) => {
        tasks = tasks.filter(t => t.id != id)
        setTask(tasks)
    }

    return (
        <div className={'app_wrapper'}>
            <TodoList tasks={tasks} deleteTask={deleteTask}/>
        </div>
    );
};

export default App;