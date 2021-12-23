import React, {useState} from 'react';
import TodoList from "./todoList";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'active' | 'completed'

export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

const App = () => {

    let [tasks, setTask] = useState([
        {id: v1(), title: 'HTML5', isDone: true},
        {id: v1(), title: 'CSS3;', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false}
    ])
    let [todoLists, setTodoLists] = useState<TodoListType[]>([
        {id: v1(), title: 'List_1', filter: 'all'},
        {id: v1(), title: 'List_2', filter: 'all'}
    ])


    const deleteTasks = (id: string) => {
        let filterDeleteTasks = tasks.filter(t => t.id !== id)
        setTask(filterDeleteTasks)
    }
    const deleteList = (id: string) => {
        let filterDeleteList = todoLists.filter(tl => tl.id !== id)
        setTodoLists(filterDeleteList)
    }


    //филтрация тасок кнопками
    // let [filter, setFilter] = useState<FilterValuesType>('all')
    const removeTasks = (value: FilterValuesType, todolistID: string) => {
        let todolist = todoLists.find(t => t.id === todolistID)
        if (todolist) {
            todolist.filter = value
            setTodoLists([...todoLists])
        }
    }
    //филтрация тасок кнопками


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

    return (
        <div className={'app_wrapper'}>
            <div className={'todolists'}>
                {
                    todoLists.map(tl => {
                        let filteredTasks = tasks
                        if(tl.filter === 'active') {
                            filteredTasks = tasks.filter(task => task.isDone === false)
                        }
                        if (tl.filter === 'completed') {
                            filteredTasks = tasks.filter(task => task.isDone === true)
                        }


                        return <TodoList
                        tasks={filteredTasks}
                        id={tl.id}
                        title={tl.title}
                        deleteTasks={deleteTasks}
                        deleteList={deleteList}
                        removeTask={removeTasks}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        filter={tl.filter}/>
                    })
                }
            </div>
        </div>
    );
};

export default App;