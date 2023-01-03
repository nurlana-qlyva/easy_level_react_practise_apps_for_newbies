import { Link } from "react-router-dom";
import style from "./index.module.css";

export default function Contact({ data }) {
    return (
        data.map((user, index) => (
            <div className={style.row} key={index}>
                <div className={style.image}>
                    <img src={user.picture.large} alt="user" />
                </div>
                <div className={style.user_info}>
                    <h3>Name: {user.name.first} {user.name.last}</h3>
                    <h4>Email: <Link to={''}>{user.email}</Link></h4>
                </div>
            </div>
        ))
    )
}
