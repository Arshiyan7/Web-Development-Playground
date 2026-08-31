import { useState } from "react";

export default function StatePractice() {
  const [count, setCount] = useState(0);

  const IncrementBtn = () => {
    setCount((prev) => prev + 1);
  };
  const DecrementBtn = () => {
    setCount((prev) => prev - 1);
    // if (count < 0) { // Will cover in practice session #2
    //     setCount(0)
    // }

    // CALLBACK FUNCTION ARE MOST USED AND PRECISE THAN UPDATING THE STATE VALUE DIRECTLY E.G.:
    // function Add() {
    //   setCount((prev) => prev + 1);
    //   setCount((prev) => prev + 1);  // RESULTS IN ADDING 3 EACH TIME + IS CLICKED
    //   setCount((prev) => prev + 1);
    // }
    // function Sub() {
    //   setCount(count - 1)
    //   setCount(count - 1) // RESULTS IN SUBTRACTING 1 EACH TIME - IS CLICKED
    //   setCount(count - 1)
    // }
    // NOTICE THE DIFFERENCE? THAT IS WHY CALLBACK FUNCTIONS ARE EFFICIENT TO HANDLE MULTIPLE UPDATES
  };

  return (
    <>
      <h1>{count}</h1>

      <div className="buttons">
        <button onClick={DecrementBtn}>-</button>
        <button onClick={IncrementBtn}>+</button>
      </div>
    </>
  );
}
