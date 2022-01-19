import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import {
    addTaskAC, addTodolistAndTasksAC,
    changeStatusAC,
    changeTaskTitleAC,
    removeTaskAC,
    removeTodolistAndTasksAC,
    TaskReducer
} from "./TaskReducer";
import {
    addTodolistAC,
    changeFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    TodoListReducer
} from "./TodoListReducer";

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, todolistsDispatch] = useReducer(TodoListReducer,[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])

    let [tasks, tasksDispatch] = useReducer(TaskReducer,{
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    });

    function removeTask(id: string, todolistId: string) {
        tasksDispatch(removeTaskAC(id,todolistId));
    }

    function addTask(title: string, todolistId: string) {
        tasksDispatch(addTaskAC(title, todolistId));
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        todolistsDispatch(changeFilterAC(value, todolistId))
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        tasksDispatch(changeStatusAC(id,isDone,todolistId))
    }

    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
            tasksDispatch(changeTaskTitleAC(id, newTitle, todolistId));
    }
    function removeTodolist(id: string) {
        // засунем в стейт список тудулистов, id которых не равны тому, который нужно выкинуть
        // setTodolists(todolists.filter(tl => tl.id != id));
        todolistsDispatch(removeTodolistAC(id))
        // удалим таски для этого тудулиста из второго стейта
        // , где мы храним отдельно таски
        // delete tasks[id]; // удаляем св-во из объекта... значением которого являлся массив тасок
        // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        tasksDispatch(removeTodolistAndTasksAC(id));
    }
    function changeTodolistTitle(id: string, title: string) {
        // найдём нужный todolist
        // const todolist = todolists.find(tl => tl.id === id);
        // if (todolist) {
        //     // если нашёлся - изменим ему заголовок
        //     todolist.title = title;
        //     setTodolists([...todolists]);
        // }
        todolistsDispatch(changeTodolistTitleAC(id, title))
    }

    function addTodolist(title: string) {
        let newTodolistId = v1();
        // let newTodolist: TodolistType = {id: newTodolistId, title: title, filter: 'all'};
        todolistsDispatch(addTodolistAC(title))
        // tasksDispatch({
        //     ...tasks,
        //     [newTodolistId]: []
        // })
        tasksDispatch(addTodolistAndTasksAC(newTodolistId))
    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodolist} />
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }

                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                        changeTaskTitle={changeTaskTitle}
                        changeTodolistTitle={changeTodolistTitle}
                    />
                })
            }

        </div>
    )
}

export default App;
