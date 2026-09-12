export default function IngredientsList({
  ingredients,
  toggleRecipe,
  isGenerating,
}) {
  const ingredientsListItems = ingredients.map((item, index) => (
    <li key={`${item}-${index}`}>{item}</li>
  ));

  const hasEnoughIngredients = ingredients.length >= 4;

  return (
    <div className="aboutIngredients">
      <h2>On-Hand Ingredients ({ingredients.length})</h2>

      {ingredients.length === 0 ? (
        <p className="emptyIngredients">
          No ingredients yet — add the ingredients you have in your kitchen and
          we'll suggest a recipe.
        </p>
      ) : (
        <ol>{ingredientsListItems}</ol>
      )}

      <div className="generateRecipe">
        <div className="generateContent">
          <h3>Ready to Cook?</h3>

          {hasEnoughIngredients ? (
            <p>You have enough ingredients. Let's see what you can make!</p>
          ) : (
            <p>
              Add {4 - ingredients.length} more ingredient
              {4 - ingredients.length !== 1 ? "s" : ""} for a better recipe
              recommendation.
            </p>
          )}
        </div>

        <button
          onClick={toggleRecipe}
          disabled={!hasEnoughIngredients || isGenerating}
        >
          {isGenerating ? "Generating recipe..." : "Get Recipe"}
        </button>
      </div>
    </div>
  );
}
