import React, { useState, useEffect } from "react";
import kanji from "./kanji.json";

function randomKanji() {
  const [randomKanji, setKanji] = useState(0);

  const setRandomKanji = () => {
    const randomIndex = Math.floor(Math.random() * kanji.length);
    setKanji(randomIndex);
  };

  useEffect(() => setRandomKanji(), []);

  return <div>{randomKanji}</div>;
}

export default randomKanji;
