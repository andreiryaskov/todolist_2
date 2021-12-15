import React, {useState} from 'react';
import './App.css';

type EditableSpanPropsType = {
    value: string
}

function EditableSpan(props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState<boolean>(false)

    function onEditMode() {
        setEditMode(true)
    }

    function offEditMode() {
        setEditMode(false)
    }


    return (
        editMode
            ? <input value={props.value} autoFocus onBlur={offEditMode}/>
            : <span onDoubleClick={onEditMode}>{props.value}</span>
    )
}

export default EditableSpan;