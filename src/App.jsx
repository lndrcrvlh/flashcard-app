import SelectSubject from "./components/selectSubject/selectSubject";
import RandomKanji from "./components/randomKanji/randomKanji";

function App() {
  return (
    <div>
      <SelectSubject />
      <RandomKanji />
      <div className="text-center border-2-slate">
        <p>
          This Project uses{" "}
          <a href="https://www.youtube.com/watch?v=fM3qHaQrRHU">Tyler Potts'</a>{" "}
          tutorial as a starting point. I've added the katakana quiz and the
          means to switch between quizes. I also plugged into{" "}
          <a href="http://kanjiapi.dev">kanjiapi.dev</a> to show facts about a
          random jouyou kanji.
        </p>
        <button className="border-2-slate bg-slate-800 text-white p-2 rounded-lg m-4">
          Back to Portfolio
        </button>
      </div>
    </div>
  );
}

export default App;
