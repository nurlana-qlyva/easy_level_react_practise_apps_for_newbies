import { useState, useEffect } from "react";
import Contact from "./Contact";
import style from "./index.module.css";

export default function ContactList() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5').then(result => result.json()).then(result => setContacts(result.results));
    }, []);

    return (
        <div className={style.contact}>
            <h1>Contact API List App</h1>
            <div>
                <Contact data={contacts} />
            </div>
        </div>
    )
}
