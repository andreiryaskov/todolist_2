import React, {useState} from 'react';
import TodoList from "./todoList";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'active' | 'completed'

const App = () => {

    let [tasks, setTask] = useState([
        {id: v1(), title: 'jjkn', isDone: true},
        {id: v1(), title: 'jjfdok;', isDone: true},
        {id: v1(), title: ',mlkj', isDone: false},
        {id: v1(), title: 'jj', isDone: false}
    ])
    let [todoLists, setTodoLists] = useState([
        {id: v1(), title: 'List_1'},
        // {id: v1(), title: 'List_2'}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')

    const deleteTasks = (id: string) => {
        let filterDeleteTasks = tasks.filter(t => t.id !== id)
        setTask(filterDeleteTasks)
    }
    const deleteList = (id: string) => {
        let filterDeleteList = todoLists.filter(tl => tl.id !== id)
        setTodoLists(filterDeleteList)
    }
    const removeTasks = (value: FilterValuesType) => {
        setFilter(value)
    }
    const addTask = (title: string) => {
        let task = {id: v1(), title: title, isDone: false}
        let newTasks = [task, ...tasks]
        setTask(newTasks)
    }
    const changeTaskStatus = (id: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTask([...tasks])
        }

    }

    let filteredTasks = tasks
    if(filter === 'active') {
        filteredTasks = tasks.filter(task => task.isDone === false)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone === true)
    }

    return (
        <div className={'app_wrapper'}>
            <div className={'addItem_wrapper'}></div>
            <div className={'todolists'}>
                {
                    todoLists.map(tl => <TodoList
                        tasks={filteredTasks}
                        id={tl.id}
                        title={tl.title}
                        deleteTasks={deleteTasks}
                        deleteList={deleteList}
                        removeTask={removeTasks}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        filter={filter}/>)
                }
            </div>
        </div>
    );
};

export default App;