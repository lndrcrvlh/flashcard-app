import React, { useState, useEffect } from "react";
import KanjiCard from "./KanjiCard";
import kanji from "./kanji.json";

function KanjiContainer() {
  const [kanjiData, setKanjiData] = useState([]);

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
    <div className="flex justify-self-center self-center flex-row">
      <button
        onClick={getRandomKanji}
        className="h-[400px] w-[300px] min-h-[400px] min-w-[300px] border-2-slate bg-slate-800 text-white p-2 rounded-lg m-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        Add Kanji Card
      </button>
      <div className="flex justify-self-center self-center flex-row-reverse overflow-x-auto ">
        {kanjiData.length > 0 &&
          kanjiData.map((kanji) => {
            return <KanjiCard data={kanji} key={kanji.key} />;
          })}
      </div>
    </div>
  );
}

export default KanjiContainer;
