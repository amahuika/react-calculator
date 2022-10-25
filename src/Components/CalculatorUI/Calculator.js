import { useState } from "react";

import "./Calculator.css";

function CalculatorUI() {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [operation, setOperation] = useState("");
  const [answer, setAnswer] = useState("");

  // add number on click to array
  function NumberBtn(e) {
    if (answer !== "") {
      setAnswer("");
    }
    if (operation === "") {
      setFirst((value) => [...value, e.target.value]);
    } else {
      setSecond((value) => [...value, e.target.value]);
    }
  }

  // sets the operator
  function SelectedOperation(e) {
    if (answer !== "") {
      const splitAnswer = answer;
      setFirst((u) => [...splitAnswer.toString()]);
      setOperation(e.target.value);

      setAnswer("");
    }

    if (first.length > 0) {
      setOperation(e.target.value);
    }
  }

  // Clear handler
  function ClearInput() {
    setOperation("");
    setFirst([]);
    setSecond([]);
    setAnswer("");
  }

  // back space handler
  function backspaceHandle() {
    if (answer !== "") {
      ClearInput();
    }
    // pop() from first number
    if (first.length > 0 && second.length === 0 && operation === "") {
      const firstArr = first;
      firstArr.pop();
      setFirst((v) => [...firstArr]);
    }
    // remove operator
    if (second.length === 0 && operation !== "") {
      setOperation("");
    }

    // pop() from second
    if (second.length > 0) {
      const secondArr = second;
      secondArr.pop();
      setSecond((v) => [...secondArr]);
    }
  }

  // calculate function
  function Calculate(e) {
    // join array n convert to int
    const parseFirst = parseFloat(first.join(""));
    const parseSecond = parseFloat(second.join(""));

    // squared operator handler
    if (e.target.value === "x²" && answer === "") {
      setAnswer(parseFirst * parseFirst);
      setFirst([]);
    }

    // conditions to go further
    if (
      answer !== "" ||
      first.length === 0 ||
      operation === "" ||
      second.length === 0
    ) {
      return;
    }

    // switch case for operations
    switch (operation) {
      case "+":
        setAnswer(parseFirst + parseSecond);
        break;
      case "-":
        setAnswer(parseFirst - parseSecond);
        break;
      case "/":
        setAnswer(parseFirst / parseSecond);
        break;
      case "x":
        setAnswer(parseFirst * parseSecond);
        break;
      case "%":
        setAnswer(parseFirst % parseSecond);
        break;

      default:
        break;
    }

    // clear operation first and second number
    setOperation("");
    setFirst([]);
    setSecond([]);
  }

  return (
    <div className="container ">
      <div className="row justify-content-center ">
        <div className="col-md-8 col-lg-5">
          <div className="row mb-1">
            <div>
              <h2>React Calculator</h2>
            </div>
            <div className="">
              <input
                type="text"
                className="form-control text-end fs-4"
                value={
                  answer === ""
                    ? first.join("") + " " + operation + " " + second.join("")
                    : answer.toLocaleString("en-US")
                }
                disabled
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="btn-group">
              <button
                value="x²"
                onClick={Calculate}
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                x²
              </button>
              <button
                onClick={SelectedOperation}
                value="%"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                %
              </button>
              <button
                onClick={SelectedOperation}
                value="/"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                /
              </button>
              <button
                onClick={backspaceHandle}
                className="btn btn-outline-dark btn-sm me-1 border rounded shadow-sm"
              >
                <small>backspace</small>
              </button>
            </div>
          </div>
          <div className="row ">
            <div className="btn-group">
              <button
                onClick={NumberBtn}
                value="7"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                7
              </button>
              <button
                onClick={NumberBtn}
                value="8"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                8
              </button>
              <button
                onClick={NumberBtn}
                value="9"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                9
              </button>
              <button
                onClick={SelectedOperation}
                value="-"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                -
              </button>
            </div>
          </div>
          <div className="row mt-1">
            <div className="btn-group ">
              <button
                onClick={NumberBtn}
                value="4"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                4
              </button>
              <button
                onClick={NumberBtn}
                value="5"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                5
              </button>
              <button
                onClick={NumberBtn}
                value="6"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                6
              </button>
              <button
                onClick={SelectedOperation}
                value="x"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                x
              </button>
            </div>
          </div>

          <div className="row mt-1">
            <div className="btn-group">
              <button
                onClick={NumberBtn}
                value="1"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                1
              </button>
              <button
                onClick={NumberBtn}
                value="2"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                2
              </button>
              <button
                onClick={NumberBtn}
                value="3"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                3
              </button>
              <button
                onClick={SelectedOperation}
                value="+"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                +
              </button>
            </div>
          </div>
          <div className="row mt-1">
            <div className="btn-group">
              <button
                onClick={ClearInput}
                className="btn btn-danger btn-sm me-1 border rounded shadow-sm"
              >
                C
              </button>
              <button
                onClick={NumberBtn}
                value="0"
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                0
              </button>
              <button
                onClick={NumberBtn}
                value="."
                className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
              >
                .
              </button>
              <button
                onClick={Calculate}
                className="btn btn-primary btn-sm me-1 border rounded shadow-sm"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorUI;
