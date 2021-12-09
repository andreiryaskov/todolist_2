import React from "react";
import style from './Todolost.module.css';

function Todolist() {
    return(
        <div>
            <h3>What to learn</h3>
            <input type="text"/>
            <button>+</button>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}

export default Todolist;