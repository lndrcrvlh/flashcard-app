import { useState, useEffect } from "react";
import katakana from "./katakana.json";

function Katakana() {
  const [input, setInput] = useState("");
  const [current, setCurrent] = useState(0);

  const [katakanaStreak, setKatakanaStreak] = useState(0);
  const [maxKatakanaStreak, setMaxKatakanaStreak] = useState(0);

  const [error, setError] = useState(false);

  const setRandomkatakana = () => {
    const randomIndex = Math.floor(Math.random() * katakana.length);
    setCurrent(randomIndex);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.toLowerCase() === katakana[current].romaji) {
      setKatakanaStreak(katakanaStreak + 1);
      setMaxKatakanaStreak(katakanaStreak + 1 > maxKatakanaStreak ? katakanaStreak + 1 : maxKatakanaStreak);
      setError(false);

      localStorage.setItem("katakana-streak", katakanaStreak + 1);
      localStorage.setItem(
        "maxKatakanaStreak",
        katakanaStreak + 1 > maxKatakanaStreak ? katakanaStreak + 1 : maxKatakanaStreak
      );
    } else {
      const h = katakana[current].katakana;
      const r = katakana[current].romaji;
      setError(`Wrong! The correct answer for ${h} is ${r}`);
      setStreak(0);
      localStorage.setItem("katakanaStreak", 0);
    }

    setInput("");
    setRandomkatakana();
  };

  useEffect(() => {
    setRandomkatakana();
    setKatakanaStreak(parseInt(localStorage.getItem("katakanaStreak")) || 0);
    setMaxKatakanaStreak(parseInt(localStorage.getItem("maxKatakanaStreak")) || 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
      <header className="p-6 mb-8">
        <h1 className="text-2xl font-bold uppercase">katakana Quiz</h1>
        <div>
          <p>
            {katakanaStreak} / {maxKatakanaStreak}
          </p>
        </div>
      </header>

      <div className="text-9xl font-bold mb-8">
        <p>{katakana[current].katakana}</p>
      </div>

      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={input}
            className="block w-24 bg-transparent border-b-2 border-b-white mx-auto outline-none text-center text-6xl pb-2"
          />
        </form>
      </div>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Katakana;
