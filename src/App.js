import logo from "./logo.svg";
import "./App.css";
import Jokes from "./Testas/Jokes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Joke On You</h1>
        <Jokes />
      </header>
    </div>
  );
}

export default App;
