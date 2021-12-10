import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Todolost.module.css';

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
}

function Todolist(props: PropsType) {

    let taskItem = props.tasks.map(t => {
        return <li key={t.id}><input type="checkbox"
                                     checked={t.isDone}/>
            <span>{t.title} </span>
            <button onClick={() => {
                props.removeTask(t.id)
            }}>x
            </button>
        </li>
    })

    let [inputValue, setInputValue] = useState('')

    const addTaskForButton = () => {
        props.addTask(inputValue)
        setInputValue('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent) => {
        if (e.charCode === 13) {
            addTaskForButton()
        }
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <input type="text"
                   value={inputValue}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>
            <button onClick={addTaskForButton}>+</button>
            <ul className={style.listItem}>
                {taskItem}
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}

export default Todolist;