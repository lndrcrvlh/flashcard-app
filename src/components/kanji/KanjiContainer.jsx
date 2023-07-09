import React, { useState, useEffect } from "react";
import KanjiCard from "./KanjiCard";
import kanji from "./kanji.json";
import { useFetch } from "../../hooks/useFetch";

function KanjiContainer() {
  const [randomKanji, setRandomKanji] = useState("");
  const [kanjiData, setKanjiData] = useState({});

  const chooseKanji = () => {
    setRandomKanji(Math.floor(Math.random() * kanji.length));
  };

  // const [kanjiData] = useFetch(
  //   `https://kanjiapi.dev/v1/kanji/${kanji[randomKanji]}`
  // );

  const getRandomKanji = () => {
    fetch(`https://kanjiapi.dev/v1/kanji/${kanji[randomKanji]}`)
      .then((x) => x.json())
      .then((y) => {
        setKanjiData(y);
        console.log(y);
      });
  };

  const showKanji = () => {};

  useEffect(() => chooseKanji(), []);

  return (
    <div className="text-center">
      {"kanji" in kanjiData && (
        <div className="self-center">
          <KanjiCard data={kanjiData} />
        </div>
      )}
      <button
        onClick={getRandomKanji}
        className="border-2-slate bg-slate-800 text-white p-2 rounded-lg m-4"
      >
        Show Kanji
      </button>
    </div>
  );
}

export default KanjiContainer;
