// import { useState } from "react";
import React from "react"; // We'll be using this one as it's less performative both are same thing

export default function State() {
    // const result = React.useState() return [undefined, f()] 
    // const result = React.useState('Hello') returns ['Hello',f()]
    // const result = React.useState("Hell Yeah!") there's a better way, below 👇
    const [result, SetResult] = React.useState("Hell Yeah!")

    function HandleClick(){
        SetResult('Definitely!')
    }
    return (
    <div className="container">
      <h1>Is State an important concept in React?</h1>
      <button onClick={HandleClick}>{result}</button> 
    </div>
  );
}
