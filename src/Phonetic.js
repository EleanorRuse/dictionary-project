import React from "react";
import "./Phonetic.css";

export default function Phonetics({ phonetic }) {
  const audio = new Audio(phonetic.audio);
  const playSound = (audioFile) => {
    audioFile.play();
  };

  return (
    <div className="Phonetic">
        <div className="callToPress">
 Pronuciation:< br/>
<small>Press button ⬇️</small>
    </div>
      <button
        className="btn btn-outline-dark"
        onClick={() => playSound(audio)}
      >
        <i className="fas fa-volume-up sound-icon"></i> {phonetic.text}
      </button>
    </div>
  );
}