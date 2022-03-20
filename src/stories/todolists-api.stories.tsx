import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {todolistAPI} from "../api/todolist.api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)} </div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('New Todolist Title')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)} </div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '0ae9cb84-4aff-49ed-926a-332259016199'
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)} </div>
}

export const UpdateTodolist = () => {
    const [state, setstate] = useState<any>(null)
    useEffect(() => {
        const todolistId = '06139127-dc8a-4822-be66-b140e5415e47'
        todolistAPI.updateTodolist(todolistId, 'New Todolist Title')
            .then((res) => {
                setstate(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)} </div>
}