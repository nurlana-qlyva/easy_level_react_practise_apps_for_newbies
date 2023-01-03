import style from "./index.module.css";

export default function RecipeList({ recipe }) {
  return (
    <div className={style.list}>
      <img src={recipe.recipe.image} alt="recipe" />
      <h3><strong>Title:</strong> {recipe.recipe.label}</h3>
      <p><strong>Calories:</strong> {recipe.recipe.calories}</p>
      <ol>
        {recipe.recipe.ingredients.map((ingredient, index) => {
          return <li key={index}><strong>{ingredient.text}</strong>: {ingredient.quantity}</li>
        })}
      </ol>
    </div>
  )
}
