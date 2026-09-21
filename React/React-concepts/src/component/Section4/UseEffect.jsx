import { useState, useEffect } from "react";

export default function FetchAPI() {
  const [starWarsData, setStarWarsData] = useState(null);
  const [Count, SetCount] = useState(1);

  useEffect(() => {
    console.log("Effect function ran!");
    fetch(`https://swapi.dev/api/planets/${Count}/`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [Count]);

  const UpdateCount = () => {
    SetCount((prev) => prev + 1);
  };

  console.log("rendered");

  return (
    <div>
      <h2>The Count is : {Count}</h2>
      <button onClick={UpdateCount}>Get new planet</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
