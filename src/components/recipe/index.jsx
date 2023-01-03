import { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import style from "./index.module.css";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');

  const API_ID = '9d142605';
  const API_KEY = '65f182ae22817e09d3b609f9dd359603';

  useEffect(() => {
    getRecipes();
  }, [search])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${API_ID}&app_key=${API_KEY}&type=public&q=${search}&from=0&to=5`);
    const data = await response.json();
    setRecipes(data.hits);
  }
  const getInputValue = (e) => {
    setValue(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setSearch(value);
  }

  return (
    <div className={style.recipe}>
      <h1>Recipe App</h1>
      <form action="" onSubmit={getSearch}>
        <input type="text" name="recipe" onChange={getInputValue} />
        <button type="submit">add</button>
      </form>
      <h2>Recipes List</h2>
      <div className={style.flex}>
        {recipes.map((recipe, index) => {
          return <RecipeList key={index} recipe={recipe} />
        })}
      </div>
    </div>
  )
}
