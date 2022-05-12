import React, { useState } from "react";
import Katakana from "../katakana/katakana";
import Hiragana from "../hiragana/hiragana";

function SelectSubject(props) {
  const [katakana, setKatakana] = useState(false);
  const [hiragana, setHiragana] = useState(false);

  const handleKatakana = (e) => {
    e.preventDefault();
    setKatakana(true);
  };

  const handleHiragana = (e) => {
    e.preventDefault();
    setHiragana(true);
  };

  if (katakana) {
    return <Katakana />;
  }

  if (hiragana) {
    return <Hiragana />;
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white text-center p-10">
      <h1 className="text-2xl font-bold">What would you like to study?</h1>
      <button
        className="katakana border-2 p-2 rounded-lg m-4"
        onClick={handleKatakana}
      >
        Katakana
      </button>
      <button
        className="hiragana border-2 p-2 rounded-lg m-4"
        onClick={handleHiragana}
      >
        Hiragana  
      </button>
    </div>
  );
}

export default SelectSubject;

// <div className="min-h-screen bg-slate-800 text-white text-center p-10">
// <h1 className="text-2xl font-bold">What would you like to study?</h1>
// <button className="katakana border-2 p-2 rounded-lg m-4">
//   Katakana
// </button>
// <button className="hiragana border-2 p-2 rounded-lg m-4">
//   Hiragana
// </button>
// </div>
