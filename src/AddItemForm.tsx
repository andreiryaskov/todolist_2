import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Todolost.module.css';

type AddItemPropsType = {
    addItem: (inputValue: string) => void
}

function AddItemForm(props: AddItemPropsType) {

    let [inputValue, setInputValue] = useState('')
    let [error, setError] = useState<string | null>('')

    const addItem = () => {
        if (inputValue.trim() !== '') {
            props.addItem(inputValue)
            setInputValue('')
        } else {
            setError('Title is required')
        }

    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.currentTarget.value)
        },
        onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            setError('')
            if (e.charCode === 13) {
                addItem()
            }
        }

    return(
        <div>
            <input type="text"
                   value={inputValue}
                   placeholder={'Enter title...'}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? style.error_input : ''}/>
            <button onClick={addItem}>+</button>
            {error && <div className={style.error_message}>{error}</div>}
        </div>
    )
}

export default AddItemForm;