import React, { useState } from "react";

const Todo = ({id, todo, remove}) => {

    const handleRemove = () => {
        remove(id)
    }

    return (
        <div>
            <li id={id}>
                {todo}
                <button onClick={handleRemove}>Remove Todo</button>
            </li>
        </div>
    )
}

export default Todo;