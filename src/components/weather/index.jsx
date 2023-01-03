import { useState, useEffect } from "react";
import style from "./index.module.css";
import { data } from "./data";

export default function Weather() {
    const API_KEY = '24e89f1c8e98459e95d145013230101';
    const [weather, setWeather] = useState({});
    const [value, setValue] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search ? search : 'Baku'}&aqi=no`).then(result => result.json()).then(result => setWeather(result));
    }, [search]);

    const getInputValue = e => {
        setValue(e.target.value)
    };
    const getData = e => {
        e.preventDefault();
        setSearch(value);
    }
    const dateBuilder = () => {
        const current = new Date();
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'];

        const y = current.getFullYear();
        const m = month[current.getMonth()];
        const wd = days[current.getDay()];
        const d = current.getDate();

        return `${wd} ${d} ${m} ${y}`
    };


    return (
        <div className={style.container}>
            <h1>Weather App</h1>
            <form action="" onSubmit={getData}>
                <input type="text" name="weather" onChange={getInputValue} placeholder="search..." />
            </form>
            {weather.location ? (
                <div className={`${style.weather} ${style.flex}`}>

                    <div className={style.image}>
                        {data.map(image => {
                           return image.name === weather.current.condition.text.toLowerCase() ? <img src={image.img} alt="" /> : ''
                        })}
                    </div>
                    <div className={style.text}>
                            <div>
                                <h3>{weather.location.name}, {weather.location.country}</h3>
                                <h4>{dateBuilder()}</h4>
                                <p>{weather.current.temp_c}<sup>0</sup>C</p>
                                <p>{weather.current.condition.text}</p>
                            </div>
                    </div>
                </div>
            ) : ('')}
        </div>
    )
}
