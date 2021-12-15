import React, {ChangeEvent, useState} from 'react';
import './App.css';

type EditableSpanPropsType = {
    value: string
    addItem: (newTitle: string) => void
}

function EditableSpan(props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [title, setTitle] = useState(props.value)
    let [error, setError] = useState<string | null>(null)

    function onEditMode() {
        setEditMode(true)
    }

    function offEditMode() {
        setEditMode(false)
        addItem()
    }

    const addItem = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.addItem(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    function changeTitle(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }


    return (
        editMode
            ? <input value={title}
                     autoFocus
                     onBlur={offEditMode}
                     onChange={changeTitle}
                     className={error ? "error" : ""}/>
            : <span onDoubleClick={onEditMode} >{props.value}</span>
    )
}

export default EditableSpan;