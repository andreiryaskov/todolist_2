import React, {KeyboardEvent, useState} from 'react';
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
    addTask: (title: string) => void
}

const TodoList = (props: PropsType) => {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title)
            setTitle('')
        } else {
            setError('Title is required!')
        }

    }
    const onKeyPressHandler = (e: KeyboardEvent) => {
        if (e.charCode === 13) {
            addTask()
        }
    }

    const onAllClickHandler = () => {props.removeTask('all')}
    const onActiveClickHandler = () => {props.removeTask('active')}
    const onCompletedClickHandler = () => {props.removeTask('completed')}

    let task = props.tasks.map(t => <li key={t.id}
                                        id={t.id}><input type={'checkbox'}
                                                         checked={t.isDone}/>{t.title}
        <button onClick={ () => {props.deleteTasks(t.id)} }>x</button>
    </li>)

    return (
        <div className={'todolist_wrapper'}>
            <h3>{props.title} <button onClick={ () => {props.deleteList(props.id)} }>x</button></h3>

            <input className={error ? 'error' : 'input'}
                   onChange={ (e) => { setTitle(e.currentTarget.value) } }
                   value={title}
                   onKeyPress={  onKeyPressHandler } />
            <button onClick={addTask}>+</button>
            {error && <div className={'error-message'}>{error}</div>}
            <ul>
                {task}
            </ul>
            <button onClick={ onAllClickHandler }>All</button>
            <button onClick={ onActiveClickHandler }>Active</button>
            <button onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    );
};

export default TodoList;