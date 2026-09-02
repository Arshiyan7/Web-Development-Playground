import { useState } from "react";

export default function ArrayState() {
  const [favEmojis, setFavEmojis] = useState([]);

  const emojis = ["😀", "😂", "😍", "🚀", "🎉"];

  const addFav = () => {
    setFavEmojis((prevFav) => [...prevFav, emojis[prevFav.length]]);
  };

  const renderFavEmojis = favEmojis.map((item, index) => (
    <ol key={index}>{item}</ol>
  ));
  return (
    <div className="container">
      <button onClick={addFav} className="itemBtn">
        Add item
      </button>
      <ul>{renderFavEmojis}</ul>
    </div>
  );
}
