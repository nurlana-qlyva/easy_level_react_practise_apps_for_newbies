import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch20, faHouse, faTemperatureThreeQuarters, faMagnifyingGlass, faAddressCard, faQuestion, faBars, faList, faCalculator, faContactBook, faReceipt, faCloud } from '@fortawesome/free-solid-svg-icons';

export const data = {
    "menu": [
        {
            "name": "Main",
            "url": "/home",
            "icon": faHouse
        },
        {
            "name": "Counter App",
            "url": "/counter",
            "icon": faStopwatch20
        },
        {
            "name": "Temperature Counter App",
            "url": "/temperature",
            "icon": faTemperatureThreeQuarters
        },
        {
            "name": "Search Filter App",
            "url": "/search",
            "icon": faMagnifyingGlass
        },
        {
            "name": "Register Form Validation App",
            "url": "/register",
            "icon": faAddressCard
        },
        {
            "name": "React Quiz App",
            "url": "/quiz",
            "icon": faQuestion
        },
        {
            "name": "React Navbar",
            "url": "/navbar",
            "icon": faBars
        },
        {
            "name": "Todo List App",
            "url": "/list",
            "icon": faList
        },
        {
            "name": "React Calculator App",
            "url": "/calculator",
            "icon": faCalculator
        },
        {
            "name": "Contact List API App",
            "url": "/contactList",
            "icon": faContactBook
        },
        {
            "name": "Recipe App",
            "url": "/recipe",
            "icon": faReceipt
        },
        {
            "name": "Weather App",
            "url": "/weather",
            "icon": faCloud
        }
    ]
}