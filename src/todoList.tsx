import React from 'react';
import './App.css'


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    id: string
    tasks: TaskType[]
    deleteTask: (id: string) => void
    deleteTodoLists: (id: string) => void
}


const TodoList = (props: PropsType) => {

    let task = props.tasks.map(t => <li key={t.id}
                                        id={t.id}><input type={'checkbox'}
                                                         checked={t.isDone}/>{t.title}
        <button onClick={ () => {props.deleteTask(t.id)} }>x</button>
    </li>)

    return (
        <div className={'todolist_wrapper'}>
            <h3>{props.title} <button onClick={ () => {props.deleteTodoLists(props.id)} }>x</button></h3>

            <input className="add_input"/>
            <button>+</button>
            <ul>
                {task}
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
};

export default TodoList;