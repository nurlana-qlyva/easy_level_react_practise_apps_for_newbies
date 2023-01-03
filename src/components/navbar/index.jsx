import React, {useState, useCallback} from 'react';
import { menuItems } from './MenuItem';
import style from './index.module.css';

export default function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [show, setShow] = useState(style.isHide);

    const handleClick = useCallback(() => {
        setClicked(!clicked);
        
        !clicked ? setShow(style.isShow) : setShow(style.isHide);
    }, [clicked])

    return (
        <>
            <div className={style.navbar}>
                <div className={style.logo}>React <i className="fa-brands fa-react"></i></div>
                <div className={style.menu}>
                    <div className={style.menu_icon} onClick={handleClick}>
                        {clicked ?  <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    </div>
                    <div className={show}>
                        <ul className={clicked ? `${style.list} ${style.active}` : style.list}>
                            {menuItems.map(item => {
                                return <li key={item.name}>
                                    <a href={item.url}>{item.name}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
