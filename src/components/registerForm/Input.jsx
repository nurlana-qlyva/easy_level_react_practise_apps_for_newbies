import React, { } from 'react';
import style from './index.module.css';

export default function Input(props) {
    return (
        <div>
            <div className={style.form}>
                <input 
                    type={props.type} 
                    id={props.id} 
                    name={props.name} 
                    placeholder={props.placeholder}
                    value={props.value} 
                    onChange={props.onChange} 
                />
                {props.children}
            </div>
        </div>
    )
}
