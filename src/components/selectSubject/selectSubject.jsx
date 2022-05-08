import React from "react";

function SelectSubject() {
  return (
    <div className="min-h-screen bg-slate-800 text-white text-center p-10">
      <h1 className="text-2xl font-bold">What would you like to study?</h1>
      <button className="katakana border-2 p-2 rounded-lg m-4">Katakana</button>
      <button className="hiragana border-2 p-2 rounded-lg m-4">Hiragana</button>
    </div>
  );
}

export default SelectSubject;
