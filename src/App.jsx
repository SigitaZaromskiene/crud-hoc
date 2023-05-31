import "./App.scss";
import ColorPicker from "./Design/ColorPicker";
import DiceContainer from "./Design/DiceContainer";
import { useState } from "react";
import { withColor, withNumber } from "./Logic/logic";
import DiceNumbers from "./Design/DiceNumbers";

function App() {
  const num = [
    { title: "One", num: 1 },
    { title: "Two", num: 2 },
    { title: "Three", num: 3 },
    { title: "Four", num: 4 },
    { title: "Five", num: 5 },
    { title: "Six", num: 6 },
  ];
  const [number, setNumber] = useState(1);
  const [color, setColor] = useState("black");

  const ColorBtnWithChangeColor = withColor(ColorPicker);
  const DiceNumbersWithChangeDice = withNumber(DiceNumbers);

  return (
    <div className="component">
      <div className="content">
        <div className="left">
          <div className="left-container">
            <DiceNumbersWithChangeDice
              setNumber={setNumber}
            ></DiceNumbersWithChangeDice>
          </div>
          <ColorBtnWithChangeColor
            setColor={setColor}
            color={color}
          ></ColorBtnWithChangeColor>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
