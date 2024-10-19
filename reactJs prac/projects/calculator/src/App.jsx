import Number1 from "./components/number1";
import Number2 from "./components/number2";
import Number3 from "./components/number3";
import Number4 from "./components/number4";
import Number5 from "./components/number5";
import Number6 from "./components/number6";
import Number7 from "./components/number7";
import Number8 from "./components/number8";
import Number9 from "./components/number9";
import Number0 from "./components/number0";
import Add from "./components/add";
import Sub from "./components/sub";
import Mul from "./components/mul";
import Div from "./components/div";
import Clear from "./components/clear";
import Point from "./components/point";

function Calculator() {
  return (
    <div className="main">
      <h1>Calculator</h1>
      <input type="text"></input>
      <div className="buttons">

      <Number0></Number0>
      <Number1></Number1>
      <Number2></Number2>
      <Number3></Number3>
      <Number4></Number4>
      <Number5></Number5>
      <Number6></Number6>
      <Number7></Number7>
      <Number8></Number8>
      <Number9></Number9>
      <Add></Add>
      <Sub></Sub>
      <Mul></Mul>
      <Div></Div>
      <Clear></Clear>
      <Point></Point>
      </div>
    </div>
  );
}

export default Calculator;
