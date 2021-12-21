import React from 'react';
import './App.css'
import {FilterValuesType} from "./App";


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    id: string
    tasks: TaskType[]
    deleteTasks: (id: string) => void
    deleteList: (id: string) => void
    removeTask: (value: FilterValuesType) => void
}


const TodoList = (props: PropsType) => {

    let task = props.tasks.map(t => <li key={t.id}
                                        id={t.id}><input type={'checkbox'}
                                                         checked={t.isDone}/>{t.title}
        <button onClick={ () => {props.deleteTasks(t.id)} }>x</button>
    </li>)

    return (
        <div className={'todolist_wrapper'}>
            <h3>{props.title} <button onClick={ () => {props.deleteList(props.id)} }>x</button></h3>

            <input className="add_input"/>
            <button>+</button>
            <ul>
                {task}
            </ul>
            <button onClick={ () => {props.removeTask('all')} }>All</button>
            <button onClick={ () => {props.removeTask('active')} }>Active</button>
            <button onClick={ () => {props.removeTask('completed')} }>Completed</button>
        </div>
    );
};

export default TodoList;