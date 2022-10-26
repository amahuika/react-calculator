function CalculatorButtons(props) {
  function buttonHandle(e) {
    if (props.answer !== "") {
      props.answerHandler("");
    }
    if (props.operation === "") {
      props.firstNumHandler(e.target.value);
    } else {
      props.secondNumHandler(e.target.value);
    }
  }

  function SelectOperationHandler(e) {
    props.operationHandler(e.target.value);
  }

  function Squared(e) {
    console.log(e.target.value);
    props.Calculate(e.target.value);
  }

  return (
    <div>
      <div className="row my-1">
        <div className="btn-group">
          <button
            value="x²"
            onClick={Squared}
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            x²
          </button>
          <button
            onClick={SelectOperationHandler}
            value="%"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            %
          </button>
          <button
            onClick={SelectOperationHandler}
            value="/"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            /
          </button>
          <button
            onClick={() => props.backspaceHandle()}
            className="btn btn-outline-dark btn-sm me-1 border rounded shadow-sm"
          >
            <small>backspace</small>
          </button>
        </div>
      </div>
      <div className="row ">
        <div className="btn-group">
          <button
            onClick={buttonHandle}
            value="7"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            7
          </button>
          <button
            onClick={buttonHandle}
            value="8"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            8
          </button>
          <button
            onClick={buttonHandle}
            value="9"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            9
          </button>
          <button
            onClick={SelectOperationHandler}
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
            onClick={buttonHandle}
            value="4"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            4
          </button>
          <button
            onClick={buttonHandle}
            value="5"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            5
          </button>
          <button
            onClick={buttonHandle}
            value="6"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            6
          </button>
          <button
            onClick={SelectOperationHandler}
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
            onClick={buttonHandle}
            value="1"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            1
          </button>
          <button
            onClick={buttonHandle}
            value="2"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            2
          </button>
          <button
            onClick={buttonHandle}
            value="3"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            3
          </button>
          <button
            onClick={SelectOperationHandler}
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
            onClick={() => props.clearHandler()}
            className="btn btn-danger btn-sm me-1 border rounded shadow-sm"
          >
            C
          </button>
          <button
            onClick={buttonHandle}
            value="0"
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            0
          </button>
          <button
            onClick={buttonHandle}
            value="."
            className="btn btn-outline-secondary btn-sm me-1 border rounded shadow-sm"
          >
            .
          </button>
          <button
            onClick={props.Calculate}
            className="btn btn-primary btn-sm me-1 border rounded shadow-sm"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorButtons;
