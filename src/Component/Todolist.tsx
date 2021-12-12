import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Todolost.module.css';
import {FilterValueType} from "../App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    tasks: TaskType[]
    addTask: (inputValue: string, todolistId: string) => void
    removeTask: (eventId: string, todolistId: string) => void
    changeFilter: (value: FilterValueType, todolistId: string) => void;
    changeTaskStatus: (eventId: string, isDone: boolean, todolistId: string) => void
    filter: string
    title: string
    id: string
}

function Todolist(props: PropsType) {

    let [inputValue, setInputValue] = useState('')
    let [error, setError] = useState('')

    let taskItem = props.tasks.map(t => {

        const onClickHandler = () => {
            props.removeTask(t.id, props.id)
        }
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked
            props.changeTaskStatus(t.id, newIsDoneValue, props.id)
        }

        return <li key={t.id}
                   className={t.isDone ? style.isDone : ''}
                   id={t.id}>
            <input type="checkbox"
                   checked={t.isDone}
                   onChange={onChangeHandler}
            />
            <span>{t.title} </span>
            <button onClick={onClickHandler}>x
            </button>
        </li>
    })

    const onAllChangeFilter = () => {props.changeFilter('all', props.id)},
          onActiveChangeFilter = () => {props.changeFilter('active', props.id)},
          onCompletedChangeFilter = () => {props.changeFilter('completed', props.id)}


    const addTaskBtn = () => {
        if (inputValue.trim() !== '') {
            props.addTask(inputValue, props.id)
            setInputValue('')
        } else {
            setError('Title is required')
        }

    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.currentTarget.value)
        },
        onKeyPressHandler = (e: KeyboardEvent) => {
            setError('')
            if (e.charCode === 13) {
                addTaskBtn()
            }
        }




    return (
        <div>
            <h3> {props.title} </h3>
            <input type="text"
                   value={inputValue}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? style.error_input : ''}/>
            <button onClick={addTaskBtn}>+</button>
            {error && <div className={style.error_message}>{error}</div>}
            <ul className={style.listItem}>
                {taskItem}
            </ul>
            <button onClick={ onAllChangeFilter }
                    className={props.filter === 'all' ? style.active_filter : ''}>
                All
            </button>
            <button onClick={ onActiveChangeFilter }
                    className={props.filter === 'active' ? style.active_filter : ''}>
                Active
            </button>
            <button onClick={ onCompletedChangeFilter }
                    className={props.filter === 'completed' ? style.active_filter : ''}>
                Completed
            </button>
        </div>
    )
}

export default Todolist;