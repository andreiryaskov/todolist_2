import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css'
import {FilterValuesType, TodoListType} from "./App";

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
    removeTask: (value: FilterValuesType, todolistID: string) => void
    addTask: (title: string) => void
    changeTaskStatus: (id: string, newIsDoneValue: boolean) => void
    filter: FilterValuesType
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
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value)
        }

        const onAllClickHandler = () => {
            props.removeTask('all', props.id)
        }
        const onActiveClickHandler = () => {
            props.removeTask('active', props.id)
        }
        const onCompletedClickHandler = () => {
            props.removeTask('completed', props.id)
        }



        //таски
        let task = props.tasks.map(t => {
            const onClickHandler = () => { props.deleteTasks(t.id) }
            const onCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
                let newIsDoneValue = e.currentTarget.checked
                props.changeTaskStatus(t.id, newIsDoneValue)
            }
            //таски



            return (
                <li key={t.id}
                    id={t.id}
                    className={t.isDone ? 'is_done' : ''}><input type={'checkbox'}
                                     checked={t.isDone}
                                     onChange={ onCheckedHandler }/>{t.title}
                    <button onClick={onClickHandler}>x</button>
                </li>
            )
        })


    return (
            <div className={'todolist_wrapper'}>
                <h3>{props.title}
                    <button onClick={() => {
                        props.deleteList(props.id)
                    }}>x
                    </button>
                </h3>

                <input className={error ? 'error' : 'input'}
                       onChange={onChangeHandler}
                       value={title}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={addTask}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
                <ul>
                    {task}
                </ul>
                <button onClick={onAllClickHandler}
                        className={props.filter === 'all' ? 'active_filter' : ''}>All</button>
                <button onClick={onActiveClickHandler}
                        className={props.filter === 'active' ? 'active_filter' : ''}>Active</button>
                <button onClick={onCompletedClickHandler}
                        className={props.filter === 'completed' ? 'active_filter' : ''}>Completed</button>
            </div>
        );
    }
;

export default TodoList;