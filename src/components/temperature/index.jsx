import React, { useState, useCallback } from 'react';
import style from './index.module.css';

export default function Temperature() {
    let [temp, setTemp] = useState(15);
    let [color, setColor] = useState(style.transparent);

    let increment = useCallback(() => {
        setTemp(temp++);

        if (temp >= 20) {
            setColor(style.hot);
        } else if (temp <= 15) {
            setColor(style.cold);
        } else {
            setColor(style.transparent);
        }
    }, [])


    let decrement = useCallback(() => {
        setTemp(temp--);

        if (temp >= 20) {
            setColor(style.hot);
        } else if (temp <= 15) {
            setColor(style.cold);
        } else {
            setColor(style.transparent)
        }
    }, []);

    return (
        <div className='row'>
            <div className={`${style.counter} col-8`}>
                <h1>Temperature Counter App</h1>
                <div className={`${style.temp} ${color}`}>
                    <h2 className={color}>{temp}<sup>0</sup>C</h2>
                </div>
                <div className={style.buttons}>
                    <div>
                        <button onClick={increment}>+</button>
                    </div>
                    <div>
                        <button onClick={decrement}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
