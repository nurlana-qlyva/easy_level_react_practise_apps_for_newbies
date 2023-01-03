import { useState } from "react";
import { create, all } from "mathjs";
import style from "./index.module.css";
import Button from "./Button";
import { Input } from "./Input";

const config = { matrix: 'Array' };
const math = create(all, config);

export default function Calculator() {
    const [val, setVal] = useState('');
    const getValue = e => {
        if(typeof e.target.value === 'number') {
            setVal(e.target.value)
        }
    };
    const addValue = e => setVal(val + e.target.innerHTML);
    const equal = () => setVal(math.evaluate(val));

    return (
        <div className={style.container}>
            <h1>Calculator App</h1> 
            <div className={style.input}>
                <Input change={getValue} val={val} />
            </div>
            <div className={style.row}>
                <Button onclick={addValue}>7</Button>
                <Button onclick={addValue}>8</Button>
                <Button onclick={addValue}>9</Button>
                <Button onclick={addValue}>/</Button>
            </div>
            <div className={style.row}>
                <Button onclick={addValue}>4</Button>
                <Button onclick={addValue}>5</Button>
                <Button onclick={addValue}>6</Button>
                <Button onclick={addValue}>*</Button>
            </div>
            <div className={style.row}>
                <Button onclick={addValue}>1</Button>
                <Button onclick={addValue}>2</Button>
                <Button onclick={addValue}>3</Button>
                <Button onclick={addValue}>+</Button>
            </div>
            <div className={style.row}>
                <Button onclick={addValue}>.</Button>
                <Button onclick={addValue}>0</Button>
                <Button onclick={equal}>=</Button>
                <Button onclick={addValue}>-</Button>
            </div>
        </div>
    )
}
