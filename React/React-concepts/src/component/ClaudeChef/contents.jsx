import { useRef, useState } from "react";
import "./ChefClaude.css";
import IngredientsList from "./IngredientsList.jsx";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import { getRecipeFromMistral } from "./ai.js";

export default function Contents() {
  const [ingredients, setIngredients] = useState([]);

  const [recipeShown, setRecipeShown] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const inputRef = useRef(null);

  const toggleRecipe = async () => {
    if (ingredients.length < 4 || isGenerating) return;

    setIsGenerating(true);
    setRecipeShown(true);
    setRecipe("");

    try {
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      setRecipe(recipeMarkdown);
    } finally {
      setIsGenerating(false);
    }
  };

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient").trim();

    if (!newIngredient) return;

    setIngredients((prevIngredients) => [
      ...prevIngredients,
      newIngredient,
    ]);

    inputRef.current.focus();
  }

  return (
    <div className="contents">
      <form action={addIngredients}>
        <div className="userInput">
          <input
            ref={inputRef}
            type="text"
            name="ingredient"
            placeholder="e.g. chicken, tomatoes, garlic..."
          />
          <button type="submit">+ add ingredient</button>
        </div>
      </form>

      <IngredientsList
        ingredients={ingredients}
        toggleRecipe={toggleRecipe}
        isGenerating={isGenerating}
      />

      {recipeShown && (
        <ClaudeRecipe
          recipe={recipe}
          isGenerating={isGenerating}
        />
      )}
    </div>
  );
}