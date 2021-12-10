import React, {useState} from "react";
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
}

function Todolist(props: PropsType) {

    let taskItem = props.tasks.map(t => {
        return <li><input type="checkbox"/>{t.title} <button>x</button></li>
    })

    let [inputValue, setInputValue] = useState('')

    return(
        <div>
            <h3>{props.title}</h3>
            <input type="text" value={inputValue} onChange={ (e) => { setInputValue(e.currentTarget.value) } }/>
            <button onClick={ () => {props.addTask(inputValue)} }>+</button>
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