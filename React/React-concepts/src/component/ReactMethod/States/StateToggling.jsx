import { useState } from "react";
export default function StateToggle() {
    const [IsChange, setIschage] = useState(false) 

    const Toggle = () =>{
        setIschage(prev => !prev)
    }
  return (
    <div className="container">
    <h1>Do you feel like going out?</h1>
      <button 
      onClick={Toggle}
      aria-label={`current answer : ${IsChange ? "NO" : "YES"} Click to change`}
      >{IsChange ? "NO" : "YES"}</button>
    </div>
  );
}
