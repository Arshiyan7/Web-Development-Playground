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

  //   const [magic, setMagic] = useState(false);

  //   const magicBtn = () => {
  //     setMagic(prev => !prev);
  //   };

  //   return (
  //     <>
  //       <h1>Want to see magic?</h1>
  //       <button onClick={magicBtn}>{magic ? "Hide" : "Show"}</button>
  //       {magic && <p>✨ Here's the magic!</p>}
  //     </>
  //   );
  // }

  // Objects using State:

  //   const [student, setStudent] = useState({
  //     name: "Hamza",
  //     age: 20,
  //     course: "React",
  //   });

  //   const changeName = () => {
  //     setStudent({
  //       ...student,
  //       name : "Ali"
  //     })
  //   }

  //   return (
  //     <>
  //       <h1>Name: {student.name}</h1>
  //       <h1>Age: {student.age}</h1>
  //       <h1>Course: {student.course}</h1>
  //       <button onClick={changeName}>Change Name</button>
  //     </>
  //   );
  //

  // Arrays using state:

  const [colors, setColors] = useState(["Red", "Green", "Blue"]);

  function renderColors() {
    return colors.map((color, index) => <h1 key={index}>{color}</h1>);
  }

  const addColor = () => {
    setColors([
      ...colors,
      "Yellow"
    ])
  }
  const removeColor = () => {
    setColors(prevColor => prevColor.filter(color => color != "Green"))
  }

  return (
    <>
      {renderColors()}
      <button onClick={addColor}>Add Color</button>
      <button onClick={removeColor}>Remove Green</button>
    </>
  );
}
