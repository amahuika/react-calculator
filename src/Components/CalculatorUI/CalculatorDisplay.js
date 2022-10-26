function CalculatorDisplay(props) {
  return (
    <div className="">
      <input
        type="text"
        className="form-control text-end fs-4"
        value={
          props.answer === ""
            ? props.firstNum.join("") +
              " " +
              props.operation +
              " " +
              props.second.join("")
            : props.answer.toLocaleString("en-US")
        }
        disabled
      />
    </div>
  );
}

export default CalculatorDisplay;
