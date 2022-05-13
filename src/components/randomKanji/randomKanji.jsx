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

  return (
    <div>
      {kanjiData && (
        <div className="text-slate text-center">
          <p className="mb-4 text-4xl">{kanjiData.kanji}</p>
          <p>Stroke count: {kanjiData.stroke_count}</p>
          <p>grade: {kanjiData.grade}</p>
          <p>JLPT level: {kanjiData.jlpt}</p>
          <ul>
            Kunyomi:
            {kanjiData.kun_readings &&
              kanjiData.kun_readings.map((reading) => <li>{reading}</li>)}
          </ul>
          <ul>
            Onyomi:
            {kanjiData.on_readings &&
              kanjiData.on_readings.map((reading) => <li>{reading}</li>)}
          </ul>
          <ul>
            Name Readings:
            {kanjiData.name_readings &&
              kanjiData.name_readings.map((reading) => <li>{reading}</li>)}
          </ul>
          <ul>
            Meanings:
            {kanjiData.meanings &&
              kanjiData.meanings.map((meaning) => <li>{meaning}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default randomKanji;
