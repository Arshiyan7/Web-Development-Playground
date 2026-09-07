import { useState } from "react";

export default function Jokes() {
  const [isShown, setIsShown] = useState(false);

  // Multiple conditions, then it's better to write conditions here and render in HTML
  const [messages, SetMessages] = useState(["a", "b"]); // try changing values in array to see changes🙂

  function determineText() {
    if (messages.length === 0) {
      return "You are all caught up";
    } else if (messages.length === 1) {
      return "You have 1 message";
    } else {
      return `You have ${messages.length} messages`;
    }
  }

  const joke = () => {
    setIsShown((prevShown) => !prevShown);
  };

  return (
    <div className="joke-container">
      <button className="joke-button" onClick={joke}>
        {isShown ? "Hide" : "Show"} Joke
      </button>

      {isShown && (
        <p className="joke">
          Why don't scientists trust atoms? Because they make up everything! 😂
        </p>
      )}
      <hr />
      <h1>{determineText()}</h1>
    </div>
  );
}
