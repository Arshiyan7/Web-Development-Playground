import "./soundpads.css";
import pads from "./soundpads.js";
import { useState } from "react";

export default function SoundPad() {
  const [Pads, SetPads] = useState([]);

  function renderPads() {
    return pads.map((pad) => (
      <button key={pad.id} style={{ backgroundColor: pad.color }}>
        {pad.id}
      </button>
    ));
  }

  return (
    <main>
      <div className="pad-container">{renderPads()}</div>
    </main>
  );
}
