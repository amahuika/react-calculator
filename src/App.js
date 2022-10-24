import React, { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  function Calculate(i) {
    const parseFirst = parseFloat(first);
    const parseSecond = parseFloat(second);

    switch (i) {
      case "+":
        setAnswer(parseFirst + parseSecond);
        break;
      case "-":
        setAnswer(parseFirst - parseSecond);
        break;
      case "/":
        setAnswer(parseFirst / parseSecond);
        break;
      case "X":
        setAnswer(parseFirst * parseSecond);
        break;

      default:
        break;
    }
  }

  function Clear() {
    setAnswer("");
    setFirst("");
    setSecond("");
  }

  return (
    <div className="App container">
      <h1>Simple Calculator</h1>
      <input
        type="number"
        value={first}
        onChange={(event) => setFirst(event.target.value)}
      />
      <input
        type="number"
        value={second}
        onChange={(event) => setSecond(event.target.value)}
      />
      =
      <input type="number" defaultValue={answer} />
      <div>
        <button className="AppButton" onClick={() => Calculate("+")}>
          +
        </button>
        <button className="AppButton" onClick={() => Calculate("-")}>
          -
        </button>
        <button className="AppButton" onClick={() => Calculate("X")}>
          X
        </button>
        <button className="AppButton" onClick={() => Calculate("/")}>
          /
        </button>
        <button className="AppButton" onClick={Clear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
