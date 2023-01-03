import React, {useState, useRef, useCallback} from 'react';
import data from './data.json';
import style from './index.module.css';

export default function SearchFilter() {
    const [value, setValue] = useState('');
    const inpRef = useRef();

    const getValue = useCallback(() => {
        setValue(inpRef.current.value);
    }, []);

    return (
        <div className={`row justify-content-center`}>
            <div className={`col-9`}>
                <div className={style.search}>
                    <h1>Search Filter App</h1>
                    <div className={style.input}>
                        <input type="text" ref={inpRef} onChange={getValue} placeholder='search user...'/>
                    </div>
                    <div className={style.table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(data.users.filter(user => {
                                    if(value === '') {
                                        return user;
                                    }else if (user.name.toLowerCase().includes(value.toLowerCase()) || user.surname.toLowerCase().includes(value.toLowerCase()) || user.age.toString().includes(value)) {
                                        return user;
                                    }
                                })).map((user, index) => {
                                    return <tr key={index}>
                                        <td>{user.name}</td>   
                                        <td>{user.surname}</td>
                                        <td>{user.age}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
