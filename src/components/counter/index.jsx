import React, {useState, useCallback} from 'react';
import style from './index.module.css';

export default function Counter() {
    let [count, setCount] = useState(0);

    let increment = useCallback(() => {
        setCount(count++);
    }, [])


    let decrement = useCallback(() => {
        setCount(count--);
    }, []);

    
    let reset = useCallback(() => {
        setCount(0);
    }, []);

    return (
        <>
            <div className='container text-center'>
                <div className={style.counter}>
                    <h1>Counter App</h1>
                    <h2>{count}</h2>
                    <div className={style.buttons}>
                        <button onClick={increment}>increment</button>
                        <button onClick={decrement}>decrement</button>
                        <button onClick={reset}>reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}
