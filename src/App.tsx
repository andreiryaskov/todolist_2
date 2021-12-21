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

    let [todoLists, setTodoLists] = useState([
        {id: v1(), title: 'List_1'},
        {id: v1(), title: 'List_2'}
    ])

    const deleteTask = (id: string) => {
        let filteredTasks = tasks.filter(task => task.id != id)
        setTask(filteredTasks)
    }

    const deleteTodoLists = (id: string) => {
        let filteredTodoLists = todoLists.filter(tl => tl.id != id)
        setTodoLists(filteredTodoLists)
    }

    return (
        <div className={'app_wrapper'}>
            <div className={'addItem_wrapper'}></div>
            <div className={'todolists'}>
                {
                    todoLists.map(tl => <TodoList
                        tasks={tasks}
                        deleteTask={deleteTask}
                        deleteTodoLists={deleteTodoLists}
                        id={tl.id}
                        title={tl.title}
                    />)
                }
            </div>
        </div>
    );
};

export default App;