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
    title: string
    addTask: (inputValue: string) => void
    removeTask: (eventId: string) => void
    changeFilter: (value: FilterValueType) => void;
    id: string
    filter: string
    changeTaskStatus: (eventId: string, isDone: boolean) => void
}

function Todolist(props: PropsType) {

    let taskItem = props.tasks.map(t => {

        const onClickHandler = () => {
            props.removeTask(t.id)
        }

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked
            props.changeTaskStatus(t.id, newIsDoneValue)
        }

        return <li key={t.id}><input type="checkbox"
                                     checked={t.isDone}
                                     onChange={onChangeHandler}/>
            <span>{t.title} </span>
            <button onClick={onClickHandler}>x
            </button>
        </li>
    })

    let [inputValue, setInputValue] = useState('')

    const addTaskBtn = () => {
        props.addTask(inputValue)
        setInputValue('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.currentTarget.value)
        },
        onKeyPressHandler = (e: KeyboardEvent) => {
            if (e.charCode === 13) {
                addTaskBtn()
            }
        }

    const onAllChangeFilter = () => {
            props.changeFilter('all')
        },
        onActiveChangeFilter = () => {
            props.changeFilter('active')
        },
        onCompletedChangeFilter = () => {
            props.changeFilter('completed')
        }

    return (
        <div>
            <h3>{props.title}</h3>
            <input type="text"
                   value={inputValue}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>
            <button onClick={addTaskBtn}>+</button>
            <ul className={style.listItem}>
                {taskItem}
            </ul>
            <button onClick={onAllChangeFilter}>All</button>
            <button onClick={onActiveChangeFilter}>Active</button>
            <button onClick={onCompletedChangeFilter}>Completed</button>
        </div>
    )
}

export default Todolist;