import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './index.module.css';
import { data } from './data';

export default function SideBar() {
    return (
        <>
            <div className="row justify-content-between">
                <div className="col-1 col-md-3 px-0">
                    <div className={style.sidebar}>
                        <h2>React Tasks</h2>
                        <nav>
                            <ul>
                                {data.menu.map(item => {
                                    return <li key={item.url}>
                                        <Link to={item.url}>
                                            <FontAwesomeIcon icon={item.icon} />
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={`col-9 col-md-8 ${style.task}`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
