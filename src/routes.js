import Main from "./components/main";
import Counter from "./components/counter";
import Temperature from "./components/temperature";
import SearchFilter from "./components/searchFilter";
import RegisterForm from "./components/registerForm";
import Quiz from "./components/quiz";
import Navbar from "./components/navbar";
import ToDoList from "./components/todolist";
import Calculator from "./components/calculator";
import ContactList from "./components/contactList";
import Recipe from "./components/recipe";
import Weather from "./components/weather";

const routeItem = (path, component) => {
    return {
        path,
        component
    }
}

const routes = {
    first: routeItem('/', <Main />),
    home: routeItem('/home', <Main />),
    counter: routeItem('/counter', <Counter/>),
    temperature: routeItem('/temperature', <Temperature />),
    search: routeItem('/search', <SearchFilter />),
    register: routeItem('/register', <RegisterForm />),
    quiz: routeItem('/quiz', <Quiz/>),
    navbar: routeItem('/navbar', <Navbar />),
    list: routeItem('/list', <ToDoList />),
    calculator: routeItem('/calculator', <Calculator />),
    contactList: routeItem('/contactList', <ContactList />),
    recipe: routeItem('/recipe', <Recipe />),
    weather: routeItem('/weather', <Weather />)
}

const routesArr = Object.values(routes);

export {
    routes,
    routesArr
}
