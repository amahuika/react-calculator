import { useState } from "react";

import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";

import "./Calculator.css";

function CalculatorUI() {
  const [firstNum, setFirstNum] = useState([]);
  const [second, setSecond] = useState([]);
  const [operation, setOperation] = useState("");
  const [answer, setAnswer] = useState("");

  function firstNumHandler(selectedNum) {
    setFirstNum((value) => [...value, selectedNum]);
  }
  function secondNumHandler(selectedNum) {
    setSecond((value) => [...value, selectedNum]);
  }
  function answerHandler(answer) {
    setAnswer(answer);
  }
  // add number on click to array
  function operationHandler(selection) {
    if (answer !== "") {
      const splitAnswer = answer;
      setFirstNum((u) => [...splitAnswer.toString()]);
      setOperation(selection);

      setAnswer("");
    }

    if (firstNum.length > 0) {
      setOperation(selection);
    }
  }

  // Clear handler
  function ClearInput() {
    setOperation("");
    setFirstNum([]);
    setSecond([]);
    setAnswer("");
  }

  // back space handler
  function backspaceHandle() {
    if (answer !== "") {
      setAnswer("");
    }
    // pop() from first number
    if (firstNum.length > 0 && operation === "") {
      const firstArr = firstNum;
      firstArr.pop();
      setFirstNum((v) => [...firstArr]);
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

  // calculate function ////////////////////
  function Calculate(e) {
    // join array n convert to int
    const parseFirst = parseFloat(firstNum.join(""));
    const parseSecond = parseFloat(second.join(""));

    // squared operator handler
    if (e === "x²" && answer === "") {
      setAnswer(parseFirst * parseFirst);
      setFirstNum([]);
    }

    // conditions to go further
    if (
      answer !== "" ||
      firstNum.length === 0 ||
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
    setFirstNum([]);
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
            <CalculatorDisplay
              firstNum={firstNum}
              second={second}
              operation={operation}
              answer={answer}
            />
          </div>
          <CalculatorButtons
            operation={operation}
            answer={answer}
            answerHandler={answerHandler}
            operationHandler={operationHandler}
            backspaceHandle={backspaceHandle}
            firstNumHandler={firstNumHandler}
            secondNumHandler={secondNumHandler}
            Calculate={Calculate}
            clearHandler={ClearInput}
          />
        </div>
      </div>
    </div>
  );
}

export default CalculatorUI;
