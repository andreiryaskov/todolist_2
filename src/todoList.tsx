import React from 'react';
import './App.css'

const TodoList = () => {
    return (
        <div className={'todolist_wrapper'}>
            <h3>List 1 <button>x</button></h3>
            <input className="add_input"/><button>+</button>
            <ul>
                <li><input type={'checkbox'}/>hjhgjhj<button>x</button></li>
                <li><input type={'checkbox'}/>hjhgjhj<button>x</button></li>
                <li><input type={'checkbox'}/>hjhgjhj<button>x</button></li>
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
};

export default TodoList
;