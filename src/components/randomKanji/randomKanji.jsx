import React, { useState, useEffect } from "react";
import kanji from "./kanji.json";
import { useFetch } from "../../hooks/useFetch";

function randomKanji() {
  const [randomKanji, setKanji] = useState("");

  const setRandomKanji = () => {
    const randomIndex = Math.floor(Math.random() * kanji.length);
    setKanji(randomIndex);
  };

  useEffect(() => setRandomKanji(), []);

  const [kanjiData] = useFetch(
    `https://kanjiapi.dev/v1/kanji/${kanji[randomKanji]}`
  );

  return <div>{kanjiData && <div>{JSON.stringify(kanjiData)}</div>}</div>;
}

export default randomKanji;
