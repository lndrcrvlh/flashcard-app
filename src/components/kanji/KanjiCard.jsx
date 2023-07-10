import React from "react";

function KanjiCard(data) {
  const kanjiData = data.data;

  return (
    <div className="h-[400px] w-[300px] h-[400px] w-[300px] min-h-[400px] flex-shrink-0 overflow-y-auto m-4 border-2 border-slate-500 rounded-md w-1/4 p-8 justify-self-center">
      {kanjiData && (
        <div className="text-slate text-center">
          <p className="mb-4 text-4xl">{kanjiData.kanji}</p>
          <p>
            <strong>Stroke count:</strong> {kanjiData.stroke_count}
          </p>
          <p>
            <strong>grade:</strong> {kanjiData.grade}
          </p>
          <p>
            <strong>JLPT level:</strong> {kanjiData.jlpt}
          </p>

          {kanjiData.kun_readings && kanjiData.kun_readings > 0 && (
            <ul className="mt-2">
              <strong>Kunyomi:</strong>
              {kanjiData.kun_readings.map((reading) => (
                <li key={reading}>{reading}</li>
              ))}
            </ul>
          )}

          {kanjiData.on_readings && kanjiData.on_readings.length > 0 && (
            <ul className="mt-2">
              <strong>Onyomi:</strong>
              {kanjiData.on_readings.map((reading) => (
                <li key={reading}>{reading}</li>
              ))}
            </ul>
          )}
          {kanjiData.name_readings && kanjiData.name_readings.length > 0 && (
            <ul className="mt-2">
              <strong>Name Readings:</strong>
              {kanjiData.name_readings.map((reading) => (
                <li key={reading}>{reading}</li>
              ))}
            </ul>
          )}
          <ul className="mt-2">
            <strong>Meanings:</strong>
            {kanjiData.meanings &&
              kanjiData.meanings.map((meaning) => (
                <li key={meaning}>{meaning}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default KanjiCard;
