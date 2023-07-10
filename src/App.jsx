import SelectSubject from "./components/selectSubject/selectSubject";
import KanjiContainer from "./components/kanji/KanjiContainer";

function App() {
  return (
    <div>
      <SelectSubject />
      <KanjiContainer />
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
        <a href="https://carvalho.info/">Back to Portfolio</a>
        </button>
      </div>
    </div>
  );
}

export default App;
