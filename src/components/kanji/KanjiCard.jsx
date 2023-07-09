import React from "react";

function KanjiCard(data) {
  const kanjiData = data.data;

  return (
    <div className="border-2 border-slate-500 rounded-md w-1/4 p-8">
      {console.log(kanjiData,{...kanjiData}) && <></>}
      {kanjiData && (
        <div className="text-slate text-center">
          <p className="mb-4 text-4xl">{kanjiData.kanji}</p>
          <p><strong>Stroke count:</strong> {kanjiData.stroke_count}</p>
          <p><strong>grade:</strong> {kanjiData.grade}</p>
          <p><strong>JLPT level:</strong> {kanjiData.jlpt}</p>

          {kanjiData.kun_readings && kanjiData.kun_readings > 0 && (
            <ul className="mt-2">
              <strong>Kunyomi:</strong>
              {kanjiData.kun_readings.map((reading) => (
                <li>{reading}</li>
              ))}
            </ul>
          )}

          {kanjiData.on_readings && kanjiData.on_readings.length > 0 && (
            <ul className="mt-2">
              <strong>Onyomi:</strong>
              {kanjiData.on_readings.map((reading) => (
                <li>{reading}</li>
              ))}
            </ul>
          )}
          {kanjiData.name_readings && kanjiData.name_readings.length > 0 && (
            <ul className="mt-2">
              <strong>Name Readings:</strong>
              {kanjiData.name_readings.map((reading) => (
                <li>{reading}</li>
              ))}
            </ul>
          )}
          <ul className="mt-2">
          <strong>Meanings:</strong>
            {kanjiData.meanings &&
              kanjiData.meanings.map((meaning) => <li>{meaning}</li>)}
          </ul>
        </div>
      )}

      <div className="text-center">
        
        <button
          onClick={setRandomKanji}
          className="border-2-slate bg-slate-800 text-white p-2 rounded-lg m-4"
        >
          Show another Kanji
        </button>
      </div>
    </div>
  );
}

export default KanjiCard;
