import React, { useState, useEffect } from "react";
import KanjiCard from "./KanjiCard";
import kanji from "./kanji.json";
import { useFetch } from "../../hooks/useFetch";

function KanjiContainer() {
  // const [randomKanji, setRandomKanji] = useState("");
  const [kanjiData, setKanjiData] = useState([]);

  // const chooseKanji = () => {
  //   setRandomKanji(Math.floor(Math.random() * kanji.length));
  // };

  const getRandomKanji = () => {
    const randomKanji = Math.floor(Math.random() * kanji.length);
    fetch(`https://kanjiapi.dev/v1/kanji/${kanji[randomKanji]}`)
      .then((x) => x.json())
      .then((y) => {
        setKanjiData((current) => [
          ...current,
          { ...y, key: `kanji-${randomKanji}` },
        ]);
        console.log(y);
      });
  };

  return (
    <div className="justify-self-center self-center">
      {kanjiData.length > 0 &&
        kanjiData.map((kanji) => {
          return (
            <div className="justify-self-center">
              <KanjiCard data={kanji} key={kanji.key} />
            </div>
          );
        })}
      <div className="justify-self-center">
        <button
          onClick={getRandomKanji}
          className="border-2-slate bg-slate-800 text-white p-2 rounded-lg m-4"
        >
          Show Kanji
        </button>
      </div>
    </div>
  );
}

export default KanjiContainer;
