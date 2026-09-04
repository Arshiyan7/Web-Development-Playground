import { useState } from "react";

export default function Contents() {
  const [ingredients, setIngredients] = useState([]);

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [
      ...prevIngredients,
      newIngredient,
    ]);
  }

  const ingredientsListItems = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <div className="contents">
      <form action={addIngredients}>
        <div className="userInput">
          <input
            type="text"
            name="ingredient"
            placeholder="e.g. one lonely tomato..."
          />

          <button type="submit">+ add ingredient</button>
        </div>
      </form>

      <div className="aboutIngredients">
        <h1>On-Hand Ingredients</h1>

        <ol>{ingredientsListItems}</ol>

        <div className="generateRecipe">
          <div className="generateContent">
            <h3>Ready to Cook?</h3>
            <p>Discover what you can make with your ingredients.</p>
          </div>

          <button>Get Recipe</button>
        </div>
      </div>
    </div>
  );
}