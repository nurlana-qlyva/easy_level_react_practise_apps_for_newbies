import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import style from "./index.module.css";

export default function Todo({id, text, todo, todos, completed}) {
    const deleteList = () => {
        todo(
            todos.filter(item => item.id !== id)
        )
    }

    const submitList = () => {
        todo(
            todos.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        )
    }

    return (
        <li>
            <span className={completed ? style.completed : style.text}>{text}</span>
            <button onClick={submitList}>
                <FontAwesomeIcon icon={faCheck} />
            </button>
            <button onClick={deleteList}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </li>
    )
}
