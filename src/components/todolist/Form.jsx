import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import style from "./index.module.css";


export default function Form({ text, todos, status }) {
    const inputTextHandler = (e) => {
        text.setInputText(e.target.value);
    }
    const submitTodoHandler = e => {
        e.preventDefault();
        todos.setTodos([
            ...todos.todos,
            { text: text.inputText, completed: false, id: Math.random() * 1000 }
        ])
        text.setInputText('');
    }
    const statushandler = e => {
        status.setStatus(e.target.value);
    }

    return (
        <div className={style.form}>
            <form action="">
                <div className={style.flex}>
                    <div className={style.input}>
                        <input type="text" name='input-text' onChange={inputTextHandler} value={text.inputText} />
                        <button onClick={submitTodoHandler}>
                            <FontAwesomeIcon icon={faSquarePlus} />
                        </button>
                    </div>
                    <div className={style.select}>
                        <select name="todos" onChange={statushandler}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}
