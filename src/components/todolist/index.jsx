import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import style from "./index.module.css";

export default function ToDoList() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status])


  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFiltered(
          todos.filter(todo => todo.completed === true)
        )
        break;
      case 'uncompleted':
        setFiltered(
          todos.filter(todo => todo.completed === false)
        )
        break;
      default:
        setFiltered(todos);
        break;
    }
  }

  return (
    <div>
      <header className={style.header}>
        <h1>Todo List</h1>
        <Form todos={{ todos, setTodos }} text={{ inputText, setInputText }} status={{ status, setStatus }} />
        <List todos={{ todos, setTodos }} filtered={{ filtered, setFiltered }} />
      </header>
    </div>
  )
}
