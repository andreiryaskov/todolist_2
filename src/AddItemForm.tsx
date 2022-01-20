import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import {IconButton} from "@material-ui/core";
import {Button, TextField} from "@mui/material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
            <TextField
                id="outlined-name"
                label="Enter your title..."
                value={title}
                onChange={onChangeHandler}
                size="small"
            />
            <Button variant="contained" onClick={addItem}>+</Button>


            {error && <div className="error-message">{error}</div>}
    </div>
}
