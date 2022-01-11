import React, {ChangeEvent, KeyboardEvent} from 'react';

type PropsType = {
    title: string
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    addTask: () => void
    error: string | null
}

const AddItemForm = (props: PropsType) => {
    return (
        <div>
            <input value={props.title}
                   onChange={props.onChangeHandler}
                   onKeyPress={props.onKeyPressHandler}
                   className={props.error ? "error" : ""}
            />
            <button onClick={props.addTask}>+</button>
            {props.error && <div className="error-message">{props.error}</div>}
        </div>
    );
};

export default AddItemForm;