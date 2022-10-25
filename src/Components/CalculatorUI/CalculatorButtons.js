function CalculatorButtons(props) {
  function SelectOperationHandler(e) {
    props.operationHandler(e.target.value);
  }
  function NumberBtn(e) {
    props.buttonHandler(e.target.value);
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
