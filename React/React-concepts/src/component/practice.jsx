import { useState } from "react";

export default function PracticeFile() {
  //   const [counter, setCounter] = useState(0);

  //   const add = () => {
  //     setCounter((prev) => prev + 1);
  //   };
  //   const sub = () => {
  //     setCounter((prev) => prev - 1);
  //   };
  //   const reset = () => {
  //     setCounter(0)
  //   }
  //   return (
  //     <>
  //       <h1>Counter</h1>
  //       <h1>{counter}</h1>
  //       <div className="buttons">
  //         <button onClick={sub}>-</button>
  //         <button onClick={add}>+</button>
  //         <button onClick={reset}>Reset</button>
  //       </div>
  //     </>
  //   );

  const [magic, setMagic] = useState(false);

  const magicBtn = () => {
    setMagic(prev => !prev);
  };

  return (
    <>
      <h1>Want to see magic?</h1>
      <button onClick={magicBtn}>{magic ? "Hide" : "Show"}</button>
      {magic && <p>✨ Here's the magic!</p>}
    </>
  );
}
