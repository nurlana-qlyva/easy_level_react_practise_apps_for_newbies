import React from 'react';
import Todo from './Todo';
import style from "./index.module.css";

export default function List({todos, filtered} ) {
    return (
        <div className='todo-container'>
            <ul className={style.todo_list}>
                {filtered.filtered.map((todo) => {
                    return <Todo key={todo.id} id={todo.id} text={todo.text} todos={todos.todos} todo={todos.setTodos} completed={todo.completed}/>
                })}
            </ul>
        </div>
    )
}
