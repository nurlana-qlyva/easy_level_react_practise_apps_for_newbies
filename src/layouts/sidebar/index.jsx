import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './index.module.css';
import data from './data.json';

export default function SideBar() {
    return (
        <>
            <div className="row">
                <div className="col-3 px-0">
                    <div className={style.sidebar}>
                        <h2>React Tasks</h2>
                        <nav>
                            <ul>
                                {data.menu.map(item => {
                                    return <li key={item.url}>
                                        <Link to={item.url}>{item.name}</Link>
                                    </li>
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={`col-9 ${style.task}`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
