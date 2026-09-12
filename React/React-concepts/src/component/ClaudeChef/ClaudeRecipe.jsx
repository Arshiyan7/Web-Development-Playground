import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({ recipe, isGenerating }) {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>

      <article className="suggested-recipe-container" aria-live="polite">
        {isGenerating ? (
          <p>Chef Claude is cooking up a recipe for you...</p>
        ) : (
          <ReactMarkdown>{recipe}</ReactMarkdown>
        )}
      </article>
    </section>
  );
}
