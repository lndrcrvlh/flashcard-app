import React, { useState } from "react";
import Katakana from "../katakana/katakana";
import Hiragana from "../hiragana/hiragana";

function SelectSubject() {
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

  const handleSwitch = (e) => {
    e.preventDefault();
    hiragana
      ? (setHiragana(false), setKatakana(true))
      : (setHiragana(true), setKatakana(false));
  };

  if (katakana) {
    return (
      <div className="text-slate text-center">
        <Katakana />
        <button
          className="border-2-slate bg-slate-800 text-white p-2 rounded-lg m-4"
          onClick={handleSwitch}
        >
          Switch to Hiragana
        </button>
      </div>
    );
  }

  if (hiragana) {
    return (
      <div className="text-slate text-center">
        <Hiragana />
        <button
          className="border-2-slate bg-slate-800 text-white p-2 rounded-lg m-4"
          onClick={handleSwitch}
        >
          Switch to Katakana
        </button>
      </div>
    );
  }

  return (
    <div className="text-slate text-center p-10">
      <h1 className="text-2xl font-bold">What would you like to study?</h1>
      <button
        className="katakana border-2-slate bg-slate-800 text-white p-2 rounded-lg m-4"
        onClick={handleKatakana}
      >
        Katakana
      </button>
      <button
        className="hiragana border-2-slate bg-slate-800 text-white p-2 rounded-lg m-4"
        onClick={handleHiragana}
      >
        Hiragana
      </button>
    </div>
  );
}

export default SelectSubject;